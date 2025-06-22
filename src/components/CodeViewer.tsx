import React from 'react';
import './CodeViewer.css';

const CodeViewer: React.FC = () => {
  return (
    <div className="otwo">
      <div className="content-wrapper">
        <h2 className="integration-title">Designer Framework</h2>
        <p className="integration-description">
         Design modern websites using up-to-date technology that are visually appealing, fast, and based on user psychology.
        </p>
      </div>
      
      <div className="rotating-circles">
        <div className="circle circle-1">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Logo 1" width="24" height="24" />
          </div>
          <div className="logo">
            <img src="https://freepnglogo.com/images/all_img/1691829400logo-canva-png.png" alt="Logo 2" width="24" height="24" />
          </div>
        </div>
        <div className="circle circle-2">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png" alt="Logo 3" width="24" height="24" />
          </div>
          <div className="logo">
            <img src="https://pbs.twimg.com/profile_images/1922679431966883840/LNLjvNTG_200x200.jpg" alt="Logo 4" width="20" height="20" />
          </div>
          <div className="logo">
            <img src="https://img.icons8.com/fluent/512/blender-3d.png" alt="Logo 5" width="24" height="24" />
          </div>
        </div>
        <div className="circle circle-3">
          <div className="logo">
            <img src="https://f.hellowork.com/bdmtools/2024/02/Logo-Jitter-150x150.png" alt="Logo 6" width="22" height="22" />
          </div>
          <div className="logo">
            <img src="https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67177b867938b6cb8e8ece59_64760069e93084646c9ef28a_icon-spline-3d.png" alt="Logo 7" width="24" height="24" />
          </div>
          <div className="logo">
            <img src="https://avatars.githubusercontent.com/u/199367026?s=280&v=4" alt="Logo 8" width="22" height="22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;