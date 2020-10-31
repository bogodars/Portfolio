import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { social } = useSiteMetadata()
  library.add(fab)

  return (
    <ul className="list flex green pl0 justify-center">
      {social.map((mySocial, key, name) => (
        <li key={key} className="mr2 f3 grow">
          <a
            className="green"
            rel="noreferrer"
            target="_blank"
            href={mySocial.url}
            title={mySocial.name}
          >
            <FontAwesomeIcon icon={["fab", mySocial.fa]} />
          </a>
        </li>
      ))}
    </ul>
  )
}
