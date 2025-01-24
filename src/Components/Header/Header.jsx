import React from 'react';
import './Header.css'
import { FaAngleDown } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { GoCodespaces } from "react-icons/go";
import { GoCodeReview } from "react-icons/go";
import { GoCommentDiscussion } from "react-icons/go";
import { LuWorkflow } from "react-icons/lu";
import { SiGithubcopilot } from "react-icons/si";
import { GoShieldCheck } from 'react-icons/go';
import { IoLayers } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
function Header() {
  return (
    <header className="header">
      <section className='logo-nav'>
      <div className="logo">
      <BsGithub />
        <span>GitHub</span>
      </div>
      <div class="navbar">
    <div class="dropdown">
        <a href="#">Product<FaAngleDown style={{marginLeft:5, color:'#636489'}}  size={15} className='down'/> </a>
        <div class="dropdown-content">
          <div className='dropdown-sub'>
          <section>
          <div className='dropdown-a' style={{color:'black'}}>
              <SiGithubcopilot id='blue' style={{fontSize:'25px'}} />
              <span>
                <h3 id='blue'>Github Copilot</h3>
                <p>Write better codes with AI</p>
              </span>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              <BsShieldCheck style={{fontSize:'25px'}}/>
              <aside>
                <h3>Security</h3>
                <p>Find and fix vulnerabilities</p>
              </aside>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              <LuWorkflow style={{fontSize:'25px'}}/>
              <aside>
                <h3>Actions</h3>
                <p>Automate any workflow</p>
              </aside>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              <GoCodespaces style={{fontSize:'25px'}}/>
              <aside>
                <h3>Codespaces</h3>
                <p>Instant dev environment</p>
              </aside>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              <VscIssues style={{fontSize:'25px'}}/>
              <aside>
                <h3>Issues</h3>
                <p>Plan and track work</p>
              </aside>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              < GoCodeReview style={{fontSize:'25px'}}/>
              <aside>
                <h3>Code Review</h3>
                <p>Manage Code changes</p>
              </aside>
            </div>
            <div className='dropdown-a' style={{color:'black'}}>
              < GoCommentDiscussion style={{fontSize:'25px'}}/>
              <aside>
                <h3>Discussions</h3>
                <p>Collaborate Outside Of code</p>
              </aside>
            </div>
          </section>
          <br/> <hr/>
            <div className='explore'>
              <h3 className='explore-a'>Explore</h3>
              <p className='explore-a'>All Features</p>
              <p className='explore-a'>Documentation</p>
              <p className='explore-a'>GitHub Skills</p>
              <p className='explore-a'>Blog</p>
            </div>
          </div>
           
           
        </div>
    </div>
    <div class="dropdown">
        <a href="#">Solutions <FaAngleDown style={{marginLeft:3, color: '#636489'}}  size={15} className='down'/> </a>
        <div class="dropdown-content">
        <div className='dropdown-sub2'>
          <section>
          <div className='dropdown-b' style={{color:'black'}}>
              
              <span>
                <h3>By company size</h3>
                <p id='blue'>Enterprises</p>
                <p id='blue'>Small and medium teams</p>
                <p id='blue'>Startups</p>
              </span>
            </div>
            <div className='dropdown-b' style={{color:'black'}}>
              
              <aside>
                <h3>By use case</h3>
                <p>DevSecOps</p>
                <p>DevOps</p>
                <p>CI/CD</p>
                <p>View all use cases</p>
              </aside>
            </div>
           </section><hr/>
            <div className='explore-c' style={{color:'black'}}>
              <h3>By Industry</h3>
              <p>Healthcare</p>
              <p>Financial services</p>
              <p>Manufacturing</p>
              <p>Government</p>
              <p>View all industries</p>
            </div>
          </div>
           
           
        
        </div>
    </div>
    <div class="dropdown">
        <a href="#">Resources<FaAngleDown style={{marginLeft:3, color: '#636489'}}  size={15} className='down'/> </a>
        <div class="dropdown-content">
        <div className='dropdown-sub2'>
          <section>
          <div className='dropdown-b' style={{color:'black'}}>
              
              <span>
                <h3>Topic</h3>
                <p id='blue'>AI</p>
                <p id='blue'>DevOps</p>
                <p id='blue'>Security</p>
                <p id='blue'>Software Development</p>
                <p id='blue'>View all</p>
              </span>
            </div>
            </section><hr/>
            <div className='dropdown-b' style={{color:'black'}}>             
                <h3>Explore</h3>
                <p id='blue'>Learning Pathways</p>
                <p id='blue'>White papers, Ebooks, Webinars</p>
                <p id='blue'>Customer Stories</p>
                <p id='blue'>Partners</p>
                <p id='blue'>Executive insights</p>
                
            </div>
          
            
          </div>
          </div>
    </div>
    
    <div class="dropdown">
        <a href="#">Open Source<FaAngleDown style={{marginLeft:5, color: '#636489'}}  size={15}className='down'/> </a>
        <div class="ddropdown-content">
            <div className='dropdown-sub2'>
              <section>
          <div className='dropdown-b' style={{color:'black'}}>
              
              <span>
                <h3>GitHub Sponsors</h3>
                <p id='blue'>Fund open source developers</p> 
              </span>
            </div><hr/>
            <div className='dropdown-b' style={{color:'black'}}>
              
              <aside>
                <h3>The ReadMe Project</h3>
                <p>Github community articles</p>
              </aside>
            </div><hr/>
            <div className='dropdown-b' style={{color:'black'}}>

              <span>
                <h3>Repositories</h3>
                <p id='blue'>Topics</p>
                <p id='blue'>Trending</p>
                <p id='blue'>Collections</p>
              </span>

            </div>
           </section>
            </div>
        </div>
    </div>
    <div class="dropdown">
        <a href="#">Enterprise<FaAngleDown style={{marginLeft:5,  color: '#636489'}} size={15} className='down'/> </a>
        <div class="dropdown-contentP">
           <div className='dropdown-sub'>
            <section>
              <div className='dropdown-a' style={{color:'black'}}>   
              <IoLayers id='blue' style={{fontSize:'25px'}} />
                <span>
                  <h3 id='blue'>Enterprise platform</h3>
                  <p>AI-powered developer platform</p>
                </span>

              </div><hr />
              <h3 style={{marginTop:'20px'}}>Available add-ons</h3>
              <div className='dropdown-a' style={{color:'black'}}>
                <GoShieldCheck style={{fontSize:'25px' }}/>
                <aside>
                  <h3>Advanced Security</h3>
                  <p>Enterprise-grade security features</p>
                </aside>
                </div>
                <div className='dropdown-a' style={{color:'black'}}>
                  <SiGithubcopilot id='blue' style={{fontSize:'25px'}}/>
                  <span>
                    <h3 id='blue'>GitHub Copilot</h3>
                    <p>Enterprise-grade AI features</p>
                  </span>
                  </div>
                 <div className='dropdown-a' style={{color:'black'}}>
                  <GoCommentDiscussion id='blue' style={{fontSize:'25px'}}/>
                  <span>
                    <h3 id='blue'>Premuim Support</h3>
                    <p>Enterprise grade 24/7 support</p>
                  </span>  
                 </div>
            </section>

           </div>
        </div>
    </div>
</div>

<div class="dropdown">
        <article>Pricing </article>

</div>
{ /* i love you */}
      
      </section>
      <div className="auth-buttons">
        <button className="btn login">Sign In</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;