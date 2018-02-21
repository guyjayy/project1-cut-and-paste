# project1-cut-and-paste
Description:
This image filter places a specific region of the image to a new region, scaling appropriately to fit the new region. I created the selection controls first and used the coordinates from the selection to take the selected region and paste it. I then added directions and a slider to control the sensitivity of the selection controls.

Boundary Cases and Limits:
The program is technically usable with pictures of any resolution (so long as the file is not too big to load), but it is recommended to use pictures 400-1000px in width and 200-1000px in height for ease of use. The directions text, which scales with the width of the image, becomes unreadable at lower resolutions, but all functionality is intact. Larger images (>1000px) may not fit completely in the workspace, and to access the whole image one would have to scroll or zoom out.

Sources:
The program is created using p5 libraries: https://p5js.org/
Images are taken by me.
