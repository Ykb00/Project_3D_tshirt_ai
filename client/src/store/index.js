import { proxy } from "valtio";


const state = proxy ({
    intro: true,
    color: '#2596be',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal : './react.png',
    fullDecal: './react.png'

})

export default state
