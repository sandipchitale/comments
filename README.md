# comments - scroll the YouTube comments page to the end

This is a simple script to:

- Using Puppeteer
  - Connect to a running browser (at port 9222. Launch Chrome with CLI parameter --remote-debugging-port=9222)
  - Load the [YouTube comments page](https://myactivity.google.com/page?hl=en&utm_medium=web&utm_source=youtube&page=youtube_comments) which uses infinite scroll
  - Keep scrolling till the end of infinite scroll showing all your comments

## TODO

The full comments are under the Details link. Load each comment and copy it to compile all the comments. 
  
