//import { ethers } from 'ethers';
import Web3 from 'web3'; 
//import axios from 'axios';
//import React from 'react';
import React ,{useState} from "react";
//import Loading from './assets2/load.gif';



// ============================================================
 

// ===============================================


const CTA= () => {

  var account =null;
 var contract =null;
 const ABI = [{"inputs":[{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_UnrevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_publicCost","type":"uint256"},{"internalType":"uint256","name":"_publicMax","type":"uint256"}],"name":"Set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"UnrevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_UnrevealedUri","type":"string"}],"name":"setUnrevealedUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
 var ADDRESS ='0x85d0706a6d25D23BC8B9b907580F4c407cfF757b';
 var web3 = new Web3(window.ethereum); 
 contract = new web3.eth.Contract(ABI, ADDRESS); 
//  const connbtn =document.getElementById("conbtn");
  const mintbtn =document.getElementById("minbtn");
  //const loadh =document.getElementById("ctaload");
// const [isDisabled, setDisabled] = useState(false);
 const [statebtn, setstatebtn] = useState('Mint');




 async function connectwallet() { 
       if (window.ethereum) { 
        // alert("done");
       await window.ethereum.send('eth_requestAccounts'); 
       var accounts = await web3.eth.getAccounts(); 
       account = accounts[0]; 
       document.getElementById('wallet-address').textContent = account; 
      
      //  connbtn.ariaDisabled=false;

       }
} 
 async function mint() {
  
       setstatebtn('Loading..');
      
      
       if (window.ethereum) { 

           
         var _mintAmount = Number(document.querySelector("[name=amount]").value); 
         var mintRate = Number(await contract.methods.publicCost().call()); 
         var totalAmount = mintRate * _mintAmount; 
         console.log(contract)
        
        
        // contract.methods.mint(_mintAmount).send({ from: account, value: String(totalAmount) });
        
       
        await contract.methods.mint(_mintAmount).send({ from: account, value: String(totalAmount) }) 
         .catch((error)=>{
         
          alert("ooh error, try again Please")
          setstatebtn('Mint');
          
         });
        
         await contract.methods.mint(_mintAmount).call({ from: account, value: String(totalAmount) })
         .then((receipt)=>{
          alert("Receipt is Done !")
          setstatebtn('Mint');
         });


         mintbtn.ariaDisabled = true;
       

        //  .on("receipt", function () {
        //   console.log("Receipt");
        //  })
        // .on("confirmation", function () {
        //   console.log("Confirmed");
        //  })
        //  .on("error", async function () {
        //   console.log("Error");
        //  });



        // mintbtn.disabled=true;
        
        // loadh.style.setProperty('display', 'block', 'important');
        //mintbtn.textContent='Loading..';
        
       }
       
       
       
       } 
      


  return(

      <div>

       <h2>Public Mint</h2>
      <div className='cta'>   
	 
           <a href='/#' onClick={connectwallet} id="conbtn" className='btn'>Connect Wallet</a> 

            
<input type="number" name="amount" defaultValue="1" min="1" max="15" style={{height : '22px' , marginTop:"20px",color: '#D9534F',padding:'5px'}}/>
          <a href='/#'  onClick={mint} id="minbtn" className=' btn btn-primary'>{statebtn}</a> 
        <p>Mint price: 0.001eth</p>

      </div>
      <div className='cta'> 
         {/* <image src="./assets2/load.gif" alt="load"/> */}
	       <h5 id='wallet-address'> Your Address</h5>	   
          {/*<h5 id='wallet-address'> Your Address: {defaultAccount}</h5> */}
               

      </div>
      {/* <div className='load'>
        <image src="./assets2/load.gif"/>
      </div> */}
      {/* <div className='cta' id='ctaload' style={{display:'none'}}>
        <h1>Loading....</h1>
      </div> */}

      </div>
 
  )
}

export default CTA;
