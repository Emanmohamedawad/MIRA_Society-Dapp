import styled from 'styled-components';
import { Row } from './Teamallstyle';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
	//width: 100%;
	//height: 300px;
	width: 170px;
	height: 270px;
  padding: 10px;
  //margin: 5px;
	border-radius: 30px;
	object-fit: cover;
	vertical-align: middle;
`;

export const ImageWrapper = styled.div`
	width: 90%;
	 //width: 200px;
	display: flex !important;
    //justify-content: center;
	flex-direction: column;
	align-items: center;
  border-radius: 30px;
	outline: none;
	height: 430px;
	//@media screen and (min-width: 440px) {
		 border: 1px solid #bebebe;
	//}
`;
export const IconContext =styled.div`
&:hpver{
  color:#fff;
}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
	  opacity: 0.7;
		color:#fff;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
  //	width: 100%;
  width: 1100px;
  margin-left:150px;
  @media screen and (max-width: 960px) {
		width: 100%;
    margin-left:20px;
	}
	.slick-track {
		display: flex;	
    //width: 700px;
    //width: 4940px;
		gap: 3rem;
	}

	.slick-slide {
		display: flex;
    padding: 30px important;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}

`;

// export const CardButton = styled.button`
// 	background-color: #1d609c;
// 	font-size: 1.3rem;
// 	padding: 5px 10px;
// 	color: #fff;
// 	cursor: pointer;
// 	width: 100%;
// 	font-weight: 600;
// 	margin: auto 0 0 0;
// 	border: none;
// 	border-radius: 0 0 10px 10px;
// 	&:hover {
// 		background-color: #112f4a;
// 		transition: background-color 0.2s ease-in;
// 	}
// `;


/* .main{
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #0c52a1; */
  /* }
  .profile-card{ */
    /* position: relative;
    width: 220px;
    height: 220px;
    background: #fff;
    padding: 30px;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: .6s;
    margin: 0 70px;
  }
  .profile-card:hover{
    border-radius: 10px;
    height: 260px;
  }
  .profile-card .img{
    position: relative;
    width: 100%;
    height: 100%;
    transition: .6s;
    z-index: 99;
  }
  .profile-card:hover .img{
    transform: translateY(-60px);
  }
  .img img{
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: .6s;
  }
  .profile-card:hover img{
    border-radius: 10px;

  }
  .caption{
    text-align: center;
    transform: translateY(-80px);
    opacity: 0;
    transition: .6s;
  }
  .profile-card:hover .caption{
    opacity: 1;
  }
  .caption h3{
    font-size: 21px;
    color: black;
  }
  .caption p{
    font-size: 16px;
    color: #0c52a1;
    margin: 2px 0 9px 0;
  }  */