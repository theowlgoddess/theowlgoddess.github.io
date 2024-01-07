This is the documentation for Athena's portfolio site.

Referenced in site creation:
https://towardsdatascience.com/how-to-create-a-compelling-github-portfolio-a229e7472a92
https://www.w3schools.com/cssref/css_websafe_fonts.asp
https://github.com/gitname/react-gh-pages

Example WebGL Spinning Cube:
https://www.tutorialspoint.com/webgl/html5_canvas_overview.htm
Example WebGL Triangle:
https://www.tutorialspoint.com/webgl/webgl_drawing_a_triangle.htm

~ Some helpful tips! ~

2023.09.13: Finally solved my deprecated tar issue!
- Followed the instructions here to update to the latest LTS node release:
https://medium.com/macoclock/update-your-node-js-on-your-mac-in-2020-948948c1ffb2
- Did a global install of the latest npm update (needed sudo for administrator access)
- Followed the top answer here to update tar:
https://stackoverflow.com/questions/68857411/npm-warn-deprecated-tar2-2-2-this-version-of-tar-is-no-longer-supported-and-w
- Finally, ran the "create react app" command and didn't have any vulnerabilities!
This may be a trivial thing for some people, but as it was something I was confused
about for a while, I thought I should share the steps I had to take to get here.
I've seen people online encourage others to just ignore the vulnerability and
deprecation warnings, but I really wanted to find a way to clean all those up.
