import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './main.css';

class TopNav extends Component{


componentDidMount(){
  document.addEventListener('scroll', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM

    // When the user scrolls the page, execute myFunction
    window.addEventListener('scroll', myFunction);
    var header = document.getElementById("container");
var sticky = header.offsetTop;
window.onscroll = function() {myFunction()};



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
})


document.addEventListener('scroll', function() {

  window.addEventListener('scroll', scrollFunction);

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("myBtn").onclick = function
topFunction(){


    if(window.scrollY!=0)
    {
        setTimeout(function() {
           window.scrollTo(0,window.scrollY-30);
            topFunction();
        }, 10);
     }
  }

})

}

openNav(){
  const a=document.getElementsByClassName("sidenav")[0];
  a.style.display="block";
  }
  closeNav(){
    const a=document.getElementsByClassName("sidenav")[0];
  a.style.display="none";
  }
    render(){


        return(

      <div className="container-fluid" id="container">
              <button   id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>

        <div className="container-fluid">
            <div className="row">
          <div className="col-md-10 col-sm-8 col-8  sidenav" >
          {/* <i className="fa fa-times fa-1x mt-2" onClick={this.closeNav} aria-hidden="true"></i> */}
           <div className="col" style={{padding:'0',margin:'0'}}>
            <p onClick={this.closeNav} className="closesidenav pt-3 mx-0">X</p>
            </div>

          <div className="row  "  >
            <div className="col-6 sidenavimgcol">
                    <img src="sidenavpic1.jpg" className="sidenavpics"></img>
                    <p className="textonimg">Unstitched</p>
            </div>
            <div className="col-6 sidenavimgcol" >
            <img src="sidenavpic5.jpg" className="sidenavpics"></img>
            <p className="textonimg">stitched</p>
              </div>
              <div className="col-6 sidenavimgcol " >
            <img src="sidenavpic6.jpg" className="sidenavpics"></img>
            <p className="textonimg">New Arrivals</p>
              </div>
                <div className="col-6 sidenavimgcol" >
            <img src="sidenavpic7.jpg" className="sidenavpics"></img>
            <p className="textonimg">Kurti</p>
              </div>
              <div className="col-6 sidenavimgcol" >
            <img src="sidenavpic3.jpg" className="sidenavpics"></img>
             <p className="textonimg">Fancy</p>
              </div>
               <div className="col-6 sidenavimgcol" >
               <Link to="/brandfullpage" className="navlinks"> <img src="sidenavpic2.jpg" className="sidenavpics"></img>
             <p className="textonimg">Brands</p>
             </Link>
              </div>
           
          </div>
          </div>
          </div>

        </div>
        <div className="row rw" >
         <div className="col-md-3 col-sm-3 col-3 slider ">
         <i class="fa fa-sliders " aria-hidden="true" onClick={this.openNav}></i>
         </div>
          <div className=" col-lg-2 col-md-6 col-sm-6 col-6 logodiv">
            <Link to="/mainpage" ><img src="logo_transparent.png" className="pehnawaylogo px-lg-0 pt-2 ml-lg-3"></img></Link> 
          </div>
          <div className="col-lg-8 navdiv">
              <ul className="navul mt-3">
                <li className="navli px-4">
                  New Arrivals
                </li>
                <li className="navli px-4">
Stitched
</li>
<li className="navli px-4">
Unstitched
</li>
<li className="navli px-4">
Fancy
</li>
<li className="navli px-4">
Kurti
</li>
<Link to="/brandfullpage" className="navlinks"><li className="navli px-4">Brands</li></Link>

              </ul>

          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 col-3 ">
            <ul className="userbagul mt-lg-5 ">
              <li className="userbagli">
              <i className="fa fa-shopping-bag mx-md-4 mx-sm-3 "></i>
              </li>
              <li className="userbagli">
              <i className="fa fa-user mx-md-3 mx-sm-2 " ></i>
              
              </li>
            </ul>
          </div>
        </div>

      </div>

        )
    }

}
export default TopNav;








// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import  './main.css';

// class TopNav extends Component{


// componentDidMount(){
//   document.addEventListener('scroll', function() {
//     // When the event DOMContentLoaded occurs, it is safe to access the DOM

//     // When the user scrolls the page, execute myFunction
//     window.addEventListener('scroll', myFunction);
//     var header = document.getElementById("container");
// var sticky = header.offsetTop;
// window.onscroll = function() {myFunction()};





// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// })


// document.addEventListener('scroll', function() {

//   window.addEventListener('scroll', scrollFunction);

//   var mybutton = document.getElementById("myBtn");

//   window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// document.getElementById("myBtn").onclick = function
// topFunction(){


//     if(window.scrollY!=0)
//     {
//         setTimeout(function() {
//            window.scrollTo(0,window.scrollY-30);
//             topFunction();
//         }, 10);
//      }
//   }

// })

// }
//     render(){


//         return(

//             <div className="container-fluid" id='container' >
//                   <button   id="myBtn" title="Go to top"><i class="arrow up icon"></i></button>
//                {/* logo row */}
//                <div className="row">
//                   <div className="col">
//                  <Link to="/mainpage"> <center><img src="logo1.jpg" className="mainlogo"/></center></Link>

//                   </div>

//                </div>

//                   {/* sign in , register and cart row */}

//                 <div className="row" >
//                  <div className="col " id="signinpara"  >
//                      <ul style={{float:'right'}} >
//                         <li className="login-cart"  ><i class="user outline large icon"></i> &nbsp; &nbsp; </li>
//                         <li className="login-cart"><i class="shopping cart large icon"></i></li>

//                      </ul>
//                   </div>
//                    </div>

//                <nav className="navbar navbar-expand-lg navbar-light " >
//   <button  className="navbar-toggler navtogglebutton" type="button"  data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"  ></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarNav"   >
//     <ul className="navbar-nav" >

//       <li class="nav-item" >
//         <p  > NEW ARRIVALS &nbsp; &nbsp;</p>


//       </li>
//       <li class="nav-item">
//         <p > UNSTITCHED &nbsp; &nbsp;</p>

//       </li>
//       <li class="nav-item">

//         <p > STITCHED &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//         <p >FANCY &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//           <p > KURTI &nbsp; &nbsp;</p>
//       </li>
//       <li class="nav-item">

//       <Link to="/brandfullpage" className="brandsLink"><p > BRANDS &nbsp; &nbsp;</p></Link>
//       </li>

//     </ul>
//   </div>
// </nav>


//               </div>

//         )
//     }

// }
// export default TopNav;

