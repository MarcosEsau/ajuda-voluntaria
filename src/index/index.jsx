// Index.js
import * as React from 'react';
import './index.css'
import Section1 from '../components/Section';

export default function Index() {

    return (
        <div className="body">
            <div>
                <Section1
                 title={'viadagem'}
                  text={'viadagem é bom'}
                  imageUrl={'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMq71-m8yKR259STf92I8mteopTuwXhZ3EP9eNF54bUFN9pruIxpjgF5jrUNKBkDeL'} 
                  buttonLink={'https://google.com'} 
                  />
                <Section1
                 title={'vacilação'}
                  text={'viadagem é bom'}
                  imageUrl={'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMq71-m8yKR259STf92I8mteopTuwXhZ3EP9eNF54bUFN9pruIxpjgF5jrUNKBkDeL'} 
                  buttonLink={'https://google.com'} 
                  />
                <Section1
                 title={'viadagem'}
                  text={'viadagem é bom'}
                  imageUrl={'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMq71-m8yKR259STf92I8mteopTuwXhZ3EP9eNF54bUFN9pruIxpjgF5jrUNKBkDeL'} 
                  buttonLink={'https://google.com'} 
                  />
            </div>
        </div>
    )
}
