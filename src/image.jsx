import { AspectRatio } from '@radix-ui/themes'
import { randImg } from '@ngneat/falso';

function Image() {
   return (
      <div>
         <AspectRatio ratio={16 / 9}>
            <img src={randImg()}
               alt='Image'
               style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-2)',
               }}></img>
         </AspectRatio>
      </div>

   )
}

export default Image