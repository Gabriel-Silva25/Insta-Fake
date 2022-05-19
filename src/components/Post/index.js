import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat,BsEmojiSmile} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post () {

    return (
       <>
            <header className='header-post'>
                <div className="infos-post">
                    <img className='img-header-post' src="https://ovicio.com.br/wp-content/uploads/2022/02/20220202-ovicio-mulher-gato-batman-555x555.jpg"/>
                    <p>Selina</p>
                </div>
                <FiMoreHorizontal/>
         </header>

         <div className='img-post'>
             <img src='https://img-9gag-fun.9cache.com/photo/aRr4jg2_460s.jpg' width='612px'/>
          </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size:"30px"}}>
                     <section className='engajament-post'>
                         <div className='icons-1'> 
                                <div className='icon'><IoMdHeartEmpty/></div>
                                 <div className='icon'><BsChat/></div>
                              <div className='icon'><FiSend/></div>
                            </div>   
     
                         <div className='icon'><BsBookmark/></div>
                  </section>
                  </IconContext.Provider>

                  <section className='like'>
                      <span>1M curtidas</span>
                  </section>

                  <div className='legenda'>
                      <p>
                          <strong>Batman</strong> Ai meu coração...
                      </p>
                  </div>

                  <div className='time-post'>
                      <time>Há uma hora</time>
                  </div>

                  <div className='comment'>
                      <div className='fake-comment'>
                          <div className='icon'>
                             <IconContext.Provider value={{size:"23px"}}>
                                 <BsEmojiSmile/>
                              </IconContext.Provider>

                              <input id='inputi' placeholder='Adicione um comentário...'></input>
                            </div>
                      </div>
                      <button>Publicar</button> 
                  </div>
           </div>       

                

     </>  
    )
}