import React from 'react';
import SplitSection from './SplitSection.react';

const EPKSection = () => {
  return (
    <div>
        <SplitSection 
          leftContent={<p>A little about what Jake's done</p>}
          rightContent={
            <>
                <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%',
                paddingBottom: '0px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0,16)', marginTop: '1.6e,', marginBottom: '0.9em', overflow: 'hidden',
                borderRadius: '8px', willChange: 'transform'}}>
                    <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none', padding: '0px', margin: '0px'}}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFeFN6Fux8&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>
                
            </>
          }
        />  
         </div>
  );
};

export default EPKSection;