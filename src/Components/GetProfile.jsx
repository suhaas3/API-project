import React from 'react'

import { useState } from "react";
import GetGithub from './GetGithub';
import GetLinkedIn from './GetLinkedIn';

const GetProfile = () => {

  const [selected, setSelected] = useState("");

  return (
    <>
    <div className="min-h-screen flex flex-col items-center bg-base-200 py-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Profile Viewer</h1>

      {/* Dropdown Select */}
      <select
        className="select select-bordered w-72 mb-6"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {/* Default placeholder option */}
        <option value="" disabled>
          Please select your website to view details
        </option>

        <option value="github">GitHub</option>
        <option value="linkedin">LinkedIn</option>
      </select>

      {/* Conditional Rendering */}
      {selected === "" && (
        <p className="text-gray-500 text-center">
          👆 Select a platform above to view details.
        </p>
      )}

      {selected === "github" && <GetGithub />}
      {selected === "linkedin" && <GetLinkedIn />}
    </div>


      
    </>
  )
}

export default GetProfile

