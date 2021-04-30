import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifyGreetings, AmplifySignIn } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from './aws-exports'
import AWS from 'aws-sdk'

Amplify.configure(awsconfig)

const S3_BUCKET = 'ENTERYOURBUCKET'
const REGION = 'us-east-1'

AWS.config.update({
  accessKeyId: 'ENTERYOURACCESSKEY',
  secretAccessKey: 'ENTERYOURSECRETKEY',
  httpOptions: { timeout: 900000, connectTimeout: 5000 }
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION
})

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  // const username = Auth.currentAuthenticatedUser().then((user) => {
  //   console.log('user email = ' + user.attributes.email)
  // })

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const [authState, setAuthState] = React.useState()
  const [user, setUser] = React.useState()

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
      console.log('authdata: ', authData)
    })
  }, [])

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    }

    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send((err) => {
        if (err) console.log(err)
      })
  }

  return authState === AuthState.SignedIn && user ? (
    <>
      <div class='airwolf-header'>
        <span class='airwolf-header-stripe-shine one'> </span>
        <span class='airwolf-header-stripe-shine two'> </span>
        <span class='airwolf-header-stripe-fade one'> </span>
        <span class='airwolf-header-stripe-fade two'> </span>
        <span class='airwolf-header-stripe-fade three'> </span>
        <span class='airwolf-header-stripe-fade four'> </span>
        <span class='airwolf-header-stripe-fade five'> </span>
        <span class='airwolf-header-title'>[ACCOUNT TEAM NAME]</span>
        <span class='airwolf-header-subtitle'>Internal S3 Uploader</span>
      </div>

      <div>
        <AmplifyAuthenticator usernameAlias='email'>
          <AmplifySignIn headerText='Hey, Sign in to your account' slot='sign-in' />
          <div>
            <AmplifyGreetings username={user.attributes.email}> </AmplifyGreetings>
          </div>
        </AmplifyAuthenticator>

        <div>File Upload Progress is {progress}%</div>
        <div> </div>
        <input type='file' onChange={handleFileInput} />
        <button onClick={function () { uploadFile(selectedFile) }}> Upload to S3</button>
      </div>
    </>
  ) : (
    <AmplifyAuthenticator />
  )
}

export default UploadImageToS3WithNativeSdk
