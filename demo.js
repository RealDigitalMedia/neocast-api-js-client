const { Media, Dialect, Subtitle, Network, Player, loginWithJWT } = require('./index')

const main = async () => {
  // Login
  const loggedIn = await loginWithJWT('http://localhost:3000', 'admin', 'adminadmin')

  // Check login. NOTE: Is there anything from the API we want to return to help the API user in this case?
  if (!loggedIn) {
    console.log('Failed to login')
    return
  }

  // Find the subtitle with the "English" language
  const { data: english } = await Dialect.where({ name: 'English' }).first()

  // Find the video we want to create a subtitle for
  const { data: video } = await Media.where({ name: 'CE_Jovanovic-001-02' }).first()

  // Create the subtitle
  const subtitle = new Subtitle({ data: 'What' })

  subtitle.media = video
  subtitle.dialect = english

  // Save the subtitle
  const wasSaved = await subtitle.save({ with: ['dialect', 'media'] })

  // See if it was a success
  console.log(wasSaved)

  // Log any errors
  console.log(subtitle.errors)

  // const { data: networks } = await Network.includes(['players']).all()

  // networks.forEach(network => {
  //   console.log(network.name)

  //   network.players.forEach(player => {
  //     console.log(`  ${player.name} has address ${player.macAddress}`)
  //   })
  // })
}

main()
