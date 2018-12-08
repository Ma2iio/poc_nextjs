import React from 'react'
import Head from 'next/head'

class FetchCypto extends React.Component {
    componentDidMount() {
        // eslint-disable-next-line
        const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws'))
        web3.eth.subscribe('pendingTransactions', (error, result) => {
            if (error) console.log(error)
            console.log('result', result)
        }).on('data', (txHash) => {
            console.log('txHash : ', txHash)
        })
    }

    render() {
        return <div>
            <Head>
                <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js" integrity="sha256-nWBTbvxhJgjslRyuAKJHK+XcZPlCnmIAAMixz6EefVk=" crossOrigin="anonymous"></script>
            </Head>
        </div>
    }
}

export default FetchCypto
