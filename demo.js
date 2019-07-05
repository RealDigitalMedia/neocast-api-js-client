const { ApplicationRecord, Network, Player, loginWithJWT } = require('./index')

const main = async () => {
  await loginWithJWT('http://localhost:3000', 'admin', 'adminadmin')

  const { data: networks } = await Network.includes(['players']).all()

  networks.forEach(network => {
    console.log(network.name)

    network.players.forEach(player => {
      console.log(`  ${player.name} has address ${player.macAddress}`)
    })
  })

}

main()

