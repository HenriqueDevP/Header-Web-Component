import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'





@customElement('first-header')
export class FirstHeader extends LitElement{

@property ({type:String}) logo=''
@property ({type:Array}) menus=[]
  
static styles= css`

header{
  width:100vww;
  height:15vh;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border:solid 2px #000;
  color:#f1f1f1;
  background-color:#112;
}

#logo{
  margin-left:2rem;
  font-size:40px;
  font-weight:bolder;
}
a{
  font-size:20px;
  padding:0.5rem;
  text-decoration:underline;
  color:#f1f1f1;
}

nav{
  margin-right:2rem;
}
`
render(){
    const menus=this.menus

   return html `
   <header>
<p id='logo'>${this.logo}</p>
<nav>
${menus.map((item)=> html ` <a href='/${item}'> ${item}</a>`)}
</nav>
   </header>
   
   `

  }
}

declare global {
  interface HTMLElementTagNameMap{
    'first-header':FirstHeader
  }}