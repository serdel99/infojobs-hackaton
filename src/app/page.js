import { Navbar, Modal, Input } from "../components"

import { LinkedinPage } from "../views/linkedin-page"
import { ExperienceList } from "@/views/experience-list"
export default function Home() {

  return (
    <main >
      <Navbar />
      <section className="container">
        <ExperienceList />
      </section>
    </main>
  )
}
