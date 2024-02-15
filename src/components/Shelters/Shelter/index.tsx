import { ShelterReturnFeatureCamelCase } from "src/Data/apis/shelters/types"

interface ShelterProps {
  shelter: ShelterReturnFeatureCamelCase
}

const Shelter = ({ shelter }: ShelterProps) => {
  const { geometry, properties } = shelter
  const {
    agesServed,
    howToAccess,
    lgbtqFocused,
    numberOfBeds,
    status,
    subtype,
    type,
    webUrl,
  } = properties
  console.log({ shelter })
  return (
    <div>
      <div className="f-detail-wrapper">
        <div className="s-detail-top">
          <div className="web-site">
            <a
              href={webUrl}
              alt="Shelter's page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Site
            </a>
          </div>
          <div className="s-core">
            <div>Status: {status}</div>
            <div>Number of beds: {numberOfBeds}</div>
            <div>Type: {type}</div>
          </div>
        </div>
        <div className="s-sub-detail-wrapper">
          <span className="s-focus">Focus of shelter:</span>{" "}
          <span className="s-subtype">{subtype}</span>
          <span className="s-how-to">How to access: </span>
          <span className="s-access"> {howToAccess}</span>
          <span className="s-age-served">Ages served:</span>{" "}
          <span className="s-age">{agesServed} </span>
          <span className="s-lgbtq">LGBTQ Focused:</span>
          <span className="s-info">{lgbtqFocused || "not stated"} </span>
        </div>
      </div>
    </div>
  )
}

export default Shelter

/* This file is part of WeRHere.

WeRHere is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

WeRHere is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WeRHere.  If not, see <https://www.gnu.org/licenses/>. */
