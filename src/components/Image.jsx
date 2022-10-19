import FrameImg from '../img/Frame.png'

// For the image 

function Image(){
     return(
             <div className="hidden sm:block">
                    <img className="w-full h-screen object-cover" src={FrameImg} alt='' />
               </div>    
     )
     
}

export default Image