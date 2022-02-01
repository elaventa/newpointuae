import React from 'react';
import './Footer.scss'
import { BsTelephone }  from 'react-icons/bs';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { BiMap } from 'react-icons/bi'
import { Link } from 'gatsby';

const Footer = () => {
  return (
      <footer className='footer'>
          <div className='container'>
              <div className="row">
                  <div className="col">
                        <li><Link to="#"> Home</Link></li>
                        <li><Link to="#services"> Services</Link></li>
                        <li><Link to="#facilities"> Facilities</Link></li>
                       
                  </div>
                  <div className="col">
                            <li><BsTelephone /><a href=""></a>+971 56 1481745</li>
                            <li className='number'><a href=""></a>04 4215304</li>
                          <li> <BiMap /><a href=""></a> P.O.BOX 87556, DUBAI, UAE</li>
                           <li><MdOutlineAttachEmail/><a href="mailto:sales@newpointuae.com"></a>sales@newpointuae.com</li>
                  </div>
                  
              </div>
              <h5>Copyright &copy; 2022 Newpoint Electromechanical</h5>
          </div>
      </footer>
  );
};

export default Footer;
