This follows along with the challenges in the video found at
http://www.youtube.com/watch?v=EkluES9Rvak

It practices using regular expressions. The webapp designed to help with the practice is
http://leaverou.github.io/regexplained/



Chalenges:

1. Match hex numbers such as #abc #aabbcc #aa07cc

/^#[a-f\d]{3,6}$/

2. 
Match numbers, they could be -1.5 0.445 +2000 etc..

^(\-|\+)?(\d*\.?\d*)
