import React from 'react'
import { useState } from 'react' ;
const Tabs = ({handleDisplayTab, currentTab}) => {
    return (
    <div className = "min-xs:flex min-xs:w-max min-xs-g:flex min-xs-g:w-max  mid-xs:flex mid-xs:w-max higher-mid-xs:flex higher-mid-xs:w-max sm:flex sm:w-max md:flex md:w-max greater-mid-xs:hidden greater-2xl-xs:hidden lg:hidden xl:none 2xl:hidden">
       <button onClick = {() => {handleDisplayTab('Card3')}} className = "min-xs:text-xs min-xs:p-1 min-xs:min-w-36 min-xs-g:text-xs min-xs-g:p-1 mid-xs:text-xs mid-xs:p-1 higher-mid-xs:text-xs higher-mid-xs:p-1 sm:text-xs sm:p-1 md:text-base md:p-3 greater-mid-xs : bg-blue-950 text-white p-3">SIDEBAR</button>
       <button onClick = {() => {handleDisplayTab('Card1')}} className = "min-xs:text-xs min-xs:p-1 min-xs:min-w-36 min-xs-g:text-xs min-xs-g:p-1 mid-xs:text-xs mid-xs:p-1 higher-mid-xs:text-xs higher-mid-xs:p-1 sm:text-xs sm:p-1 md:text-base md:p-3 greater-mid-xs : bg-blue-950 text-white p-3">DISCUSSION FOURM</button>
       <button onClick = {() => {handleDisplayTab('Card2')}} className = "min-xs:text-xs min-xs:p-1 min-xs:min-w-36 min-xs-g:text-xs min-xs-g:p-1 mid-xs:text-xs mid-xs:p-1 higher-mid-xs:text-xs higher-mid-xs:p-1 sm:text-xs sm:p-1 md:text-base md:p-3 greater-mid-xs : bg-blue-950 text-white p-3">MARKET STORIES</button>
    </div>
  )
}

export default Tabs ;