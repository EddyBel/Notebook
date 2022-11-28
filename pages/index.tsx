import { settings } from "../configs/index";
import Link from "next/link";

function Home() {
  return (
    <main className="HOME">
      {/* content - start */}
      <section className="section-content">
        {/* text-home - start */}
        <p className="mini-title">Estudiante de programacion.</p>
        <h1 className="title">Blog de notas de estudio</h1>
        <p className="description">
          Blog de mis notas personales de estudio para su facil consumo mas
          adelante, organizadas por caracteristicas, tecnologia y etiquetas que
          contengan.
        </p>
        {/* text-home - end */}

        {/* buttons-main - start */}
        <div className="container-buttons">
          <Link href="/Notes">
            <a className="button-home notes">Notas</a>
          </Link>
          <Link href="/Info">
            <a className="button-home report">Reporte</a>
          </Link>
        </div>
        {/* buttons-main - end */}
      </section>
      {/* content - end */}

      {/* image - start */}
      <section className="section-imagen" id="container-img">
        <img
          src={settings.backgrounds[0]}
          alt="imagen_main"
          className="imagen-home"
        />
      </section>
      {/* image - end */}
    </main>
  );
}

export default Home;
