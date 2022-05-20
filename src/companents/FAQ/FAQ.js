import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:2rem;
  justify-content: center;
  position: relative;
  height: 100vh;
  h2{
    color:#fff;
    font-size:3rem;
    text-align:center;
  }
  // background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 20%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2.5rem;
    font-size: 2rem;
    color: white;
  }
  span {
    margin-right: 2.5rem;
  }
`;


const Dropdown = styled.div`
  background: #1c1c1c;
  color: #D9534F;
  width: 100%;
  height:100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D9534F;
  border-top: 1px solid #D9534F;
  p {
    font-size: 20px;
    padding: 1.5rem;
  }
`;




const FQA = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
    return (

        <IconContext.Provider value={{ color: '#D9534F', size: '25px' }}>

          <AccordionSection id='fqa'>
          <header >
             <h2>F.A.Q</h2>
            </header>
            <Container>
 
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      );
};
export default FQA;


// import React from 'react';
// import styled from 'styled-components';
// //import { InnerLayout } from '../styles/Layouts';
// import questions from './Data.js';
// import Question from './Question';
// function FAQSection() {
//     return (
//         <FaqStyled>
//             <InnerLayout>
//                 <div className="questions-con">
//                     {
//                         questions.map((q)=>{
//                             return <Question key={q.id} {...q} />
//                         })
//                     }
//                 </div>
                
//             </InnerLayout>
//         </FaqStyled>
//     )
// }

// const FaqStyled = styled.section`
//     .c-para{
//         width: 60%;
//         margin: 0 auto;
//     }
//     .questions-con{
//         margin-top: 1rem;
//         width:1000px;
//         text-align: center;
//         justify-content: center;
//         margin-left: 7rem;
//     }
//     // .lines{
//     //     position: absolute;
//     //     left: 0;
//     //     top: 300%;
//     //     width: 100%;
//     //     z-index: -1;
//     //     img{
//     //         width: 100%;
//     //     }
//     // }
// `;

// const OuterLayout = styled.section`
//     padding: 5rem 18rem;
//     @media screen and (max-width: 1347px){
//         padding: 5rem 14rem;
//     }
//     @media screen and (max-width: 1186px){
//         padding: 5rem 8rem;
//     }
//     @media screen and (max-width: 990px){
//         padding: 5rem 4rem;
//     }
// `;
// const InnerLayout = styled.section`
//     padding: 5rem 0;
// `;

// export default FAQSection;