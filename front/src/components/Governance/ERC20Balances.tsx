import { useEffect, useState } from "react"
import useEthContext from "../../hooks/useEthContext"

interface ERC20BalancesProps {
    WIDBalance: number,
    SWIDBalance: number,
    setWIDBalance: Function,
    setSWIDBalance: Function,
}

const ERC20Balances = ({WIDBalance, setWIDBalance, SWIDBalance, setSWIDBalance}: ERC20BalancesProps) => {
    const { state: { widContract, governanceContract, accounts, web3 } } = useEthContext()

    useEffect(() => {
        (async () => {
            const balance = await widContract.methods.balanceOf(accounts[0]).call({from: accounts[0]})
            setWIDBalance(web3.utils.fromWei(web3.utils.BN(balance)))

            const swidBalance = await governanceContract.methods.getVotingPower().call({from: accounts[0]})
            setSWIDBalance(web3.utils.fromWei(web3.utils.BN(swidBalance)))
        })()
    }, [accounts, widContract, web3, WIDBalance, setWIDBalance, governanceContract.methods, setSWIDBalance])

    return (
        <>
            <span>Your WID Balance : {WIDBalance}</span>&nbsp;<span>Your SWID Balance: {SWIDBalance}</span>
        </>
    )
}

export default ERC20Balances