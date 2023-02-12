import React from 'react';
import './App.css';



 class Presentational extends React.Component {
  constructor(props) {
     super(props);
  this.handleClickColor = this.handleClickColor.bind(this);
  this.handleClickQuote = this.handleClickQuote.bind(this);
  this.handleClick = this.handleClick.bind(this);
    }
    
    handleClickColor(e) {
       this.props.chooseColor(e.target.value);
     }
    
      handleClickQuote(e) {
       this.props.chooseQuote(e.target.value);
     }
    
   handleClick = (e) => {
   
     this.handleClickQuote(e);
     this.handleClickColor(e);
     
   }
    
      
  render() {
   
  return (
   
  <div id="wrapper"  style={{backgroundColor: this.props.color1}}> 
   <div id='main'>
    <div id="quote-box">    
   
     <blockquote id="text" style={{color: this.props.color1}}>
       <p id="parragraph"><span id='b' style={{color: this.props.color1}}>&#8220;</span>{this.props.quote}</p>
       <p id="author" style={{color: this.props.color1}} >{this.props.author}</p>
     </blockquote>
    
     <div id="btns">    
      <a id="tweet-quote" title="Tweet this quote!" style={{backgroundColor: this.props.color1}}  href="twitter.com/intent/tweet" > <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTE2LDAuNTE2KSBzY2FsZSgwLjk5NCwwLjk5NCkiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2NjY2NjIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYxLjI1LDM1LjQ0MTQxYy00LjM2NzE5LDYuMDg4ODYgLTkuNDA2MjUsMTEuNTA1ODYgLTE1LjY2MzA4LDE1Ljc4OTA2YzAsMS4yMTc3NyAwLDIuMzkzNTUgMCwzLjYxMTMzYzAsMzkuNDMwNjYgLTMwLjczODI4LDg0LjkwODIgLTg3LjgwNTY3LDg0LjkwODJjLTE2LjkyMjg1LDAgLTMzLjI1NzgxLC0yLjI2NzU3IC00Ny4wMzEyNSwtMTAuNzVjNC44NzEwOSwwIDIuODU1NDcsMCA1LjM3NSwwYzE5LjgyMDMxLDAgMjkuNzMwNDcsLTYuODQ0NzMgNDAuMzk2NDksLTE0LjY5NzI2Yy0xMy43NzM0NCwwIC0zMS4yODQxOSwtMTMuOTQxNDEgLTM1LjA2MzQ4LC0yNi4wNzcxNmMxLjg4OTY1LDAuNTg3OSAzLjc3OTI5LDAuNTg3OSA1LjYyNjk1LDAuNTg3OWMzLjE0OTQyLDAgNS42Njg5NSwtMC42Mjk4OSA4LjE4ODQ4LC0xLjIxNzc3Yy0xMy44MTU0MywtMi40MzU1NSAtMjQuNDgxNDUsLTE0LjUyOTMgLTI0LjQ4MTQ1LC0yOS4xMDA1OWMwLC0wLjU4Nzg5IDAsLTAuNTg3ODkgMCwtMC41ODc4OWMzLjc3OTMsMS44MDU2NyA4Ljc3NjM4LDMuMDIzNDQgMTMuODE1NDQsMy42MTEzMmMtOC4xNDY0OSwtNS40NTg5OCAtMTMuODE1NDQsLTE0LjU3MTI4IC0xMy44MTU0NCwtMjQuODU5MzdjMCwtNS40NTg5OCAxLjI1OTc3LC0xMC45MTc5NyA0LjQwOTE5LC0xNS4xNTkxOGMxNS4wMzMyLDE4LjE4MjYxIDM3LjIwNTA3LDM2LjQwNzIzIDY5LjUzOTA2LDM2LjQwNzIzYy0wLjYyOTg5LC0xLjg0NzY2IC0wLjYyOTg5LC00LjI4MzIxIC0wLjYyOTg5LC02LjY3Njc2YzAsLTE2LjM3Njk1IDEzLjgxNTQzLC0yOS43MzA0NyAzMC43MzgyOCwtMjkuNzMwNDdjOC43NzYzNiwwIDE2LjkyMjg1LDMuNjUzMzIgMjMuMjIxNjgsOS43MDAyYzYuODg2NzIsLTEuMjE3NzcgMTMuMTQzNTUsLTMuNjUzMzIgMTkuNDAwNCwtNy4yNjQ2NWMtMi40Nzc1NCw2LjYzNDc2IC03LjUxNjYsMTIuNzIzNjIgLTEzLjc3MzQ0LDE2LjMzNDk2YzYuMjU2ODMsLTAuNTg3OSAxMS45MjU3OCwtMi4zOTM1NSAxNy41NTI3MywtNC44MjkxIj48L3BhdGg+PC9nPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik0xNjEuMjUsMzUuNDQxNDFjLTUuNjI2OTUsMi40MzU1NSAtMTEuMjk1OSw0LjI0MTIxIC0xNy41NTI3Myw0LjgyOTFjNi4yNTY4MywtMy42MTEzMyAxMS4yOTU5LC05LjcwMDIgMTMuNzczNDQsLTE2LjMzNDk2Yy02LjI1Njg0LDMuNjExMzIgLTEyLjUxMzY4LDYuMDQ2ODggLTE5LjQwMDQsNy4yNjQ2NWMtNi4yOTg4MiwtNi4wNDY4NyAtMTQuNDQ1MzEsLTkuNzAwMiAtMjMuMjIxNjgsLTkuNzAwMmMtMTYuOTIyODUsMCAtMzAuNzM4MjgsMTMuMzUzNTIgLTMwLjczODI4LDI5LjczMDQ3YzAsMi4zOTM1NSAwLDQuODI5MSAwLjYyOTg5LDYuNjc2NzZjLTMyLjMzMzk5LDAgLTU0LjUwNTg2LC0xOC4yMjQ2MSAtNjkuNTM5MDYsLTM2LjQwNzIzYy0zLjE0OTQyLDQuMjQxMjEgLTQuNDA5MTksOS43MDAyIC00LjQwOTE5LDE1LjE1OTE4YzAsMTAuMjg4MDkgNS42Njg5NSwxOS40MDA0IDEzLjgxNTQ0LDI0Ljg1OTM4Yy01LjAzOTA2LC0wLjU4Nzg5IC0xMC4wMzYxNCwtMS44MDU2NiAtMTMuODE1NDQsLTMuNjExMzJjMCwwIDAsMCAwLDAuNTg3ODljMCwxNC41NzEyOSAxMC42NjYwMiwyNi42NjUwNCAyNC40ODE0NSwyOS4xMDA1OWMtMi41MTk1MywwLjU4Nzg5IC01LjAzOTA2LDEuMjE3NzcgLTguMTg4NDgsMS4yMTc3N2MtMS44NDc2NiwwIC0zLjczNzMsMCAtNS42MjY5NSwtMC41ODc5YzMuNzc5MjksMTIuMTM1NzUgMjEuMjkwMDQsMjYuMDc3MTYgMzUuMDYzNDgsMjYuMDc3MTZjLTEwLjY2NjAyLDcuODUyNTMgLTIwLjU3NjE4LDE0LjY5NzI2IC00MC4zOTY0OSwxNC42OTcyNmMtMi41MTk1MywwIC0wLjUwMzkxLDAgLTUuMzc1LDBjMTMuNzczNDQsOC40ODI0MyAzMC4xMDg0LDEwLjc1IDQ3LjAzMTI1LDEwLjc1YzU3LjA2NzM5LDAgODcuODA1NjcsLTQ1LjQ3NzU0IDg3LjgwNTY3LC04NC45MDgyYzAsLTEuMjE3NzggMCwtMi4zOTM1NiAwLC0zLjYxMTMzYzYuMjU2ODMsLTQuMjgzMiAxMS4yOTU5LC05LjcwMDIgMTUuNjYzMDgsLTE1Ljc4OTA2Ij48L3BhdGg+PC9nPjxwYXRoIGQ9IiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
      </a>
      <a id="new-quote" target="_blank" style={{backgroundColor: this.props.color1}} onClick={this.handleClick} >New quote</a>
     </div>  
      
    </div>      
    <div id="text2" >by hezag</div>
   </div> 
  </div>  
     );
   }
  }
  
  
  export default Presentational;

  
  
