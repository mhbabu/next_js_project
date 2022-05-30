import React from 'react';
import Link from 'next/link';


export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
       <Link href="/"><a className="navbar-brand">Navbar</a></Link> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home<span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">AboutUs</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
