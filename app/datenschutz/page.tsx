import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Fußpflege Sachsenheim',
  description: 'Datenschutzerklärung und Informationen zum Schutz Ihrer Daten',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-6">
          <Link
            href="/"
            className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors"
          >
            ← Fußpflege Sachsenheim
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            {/* Einleitung */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                identifiziert werden können. Ausführliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                Datenschutzerklärung.
              </p>
            </section>

            {/* Datenerfassung */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Datenerfassung auf dieser Website
              </h3>

              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
                zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Wie erfassen wir Ihre Daten?
              </h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular
                eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
                der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische
                Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Wofür nutzen wir Ihre Daten?
              </h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
                Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
                zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren
                steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            {/* Verantwortliche Stelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                2. Verantwortliche Stelle
              </h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-semibold">[Vollständiger Name / Firmenname]</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ] [Stadt]</p>
                <p className="mt-2">
                  Telefon: +49 123 456 7890<br />
                  E-Mail: info@beispiel.de
                </p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die
                allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.)
                entscheidet.
              </p>
            </section>

            {/* Speicherdauer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                3. Speicherdauer
              </h2>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
                für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen
                geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
                Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
                die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder
                handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>
            </section>

            {/* Rechtsgrundlagen */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                4. Rechtsgrundlagen der Verarbeitung
              </h2>
              <p>
                Im Folgenden erhalten Sie Informationen zu den Rechtsgrundlagen der
                DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> dient uns als Rechtsgrundlage
                  für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen
                  bestimmten Verarbeitungszweck einholen.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> dient als Rechtsgrundlage,
                  wenn die Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher
                  Maßnahmen erforderlich ist.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> liegt vor, wenn eine
                  Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> kommt zur Anwendung, wenn die
                  Verarbeitung zur Wahrung unserer berechtigten Interessen oder der eines
                  Dritten erforderlich ist.
                </li>
              </ul>
            </section>

            {/* Datenerfassung Website */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                5. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine
                Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden
                entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
                dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
              <p className="mt-3">
                Rechtsgrundlage für die Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), sofern
                Sie über unser Cookie-Banner eingewilligt haben.
              </p>
              <p className="mt-3">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
                Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                Löschen der Cookies beim Schließen des Browsers aktivieren.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Server-Log-Dateien
              </h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in
                so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
                übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
                der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Kontaktformular / Anfrage per E-Mail
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
                Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
                oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
                lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            {/* Externe Dienste */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                6. Externe Dienste und Tools
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Airtable</h3>
              <p>
                Wir verwenden Airtable zur Verwaltung und Speicherung von Terminanfragen.
                Airtable ist ein Dienst der Formagrid Inc., 799 Market Street, 8th Floor,
                San Francisco, CA 94103, USA.
              </p>
              <p className="mt-3">
                Wenn Sie eine Terminanfrage über unser Kontaktformular senden, werden Ihre
                Daten an Airtable übermittelt und dort gespeichert. Dies umfasst:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Vor- und Nachname</li>
                <li>Telefonnummer</li>
                <li>E-Mail-Adresse</li>
                <li>Adresse</li>
                <li>Gewünschte Leistung und Termindetails</li>
              </ul>
              <p className="mt-3">
                Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
              </p>
              <p className="mt-3">
                Mehr Informationen zum Datenschutz bei Airtable finden Sie unter:{' '}
                <a
                  href="https://www.airtable.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  https://www.airtable.com/privacy
                </a>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Google Analytics (optional)
              </h3>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
                Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow
                Street, Dublin 4, Irland.
              </p>
              <p className="mt-3">
                <em>
                  (Hinweis: Dieser Abschnitt ist nur relevant, wenn Sie Google Analytics
                  nutzen möchten. Ansonsten können Sie ihn entfernen.)
                </em>
              </p>
            </section>

            {/* Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                7. Ihre Rechte als betroffene Person
              </h2>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Recht auf Auskunft (Art. 15 DSGVO)</h4>
                  <p>
                    Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten
                    personenbezogenen Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Recht auf Berichtigung (Art. 16 DSGVO)
                  </h4>
                  <p>
                    Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder
                    Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu
                    verlangen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Recht auf Löschung (Art. 17 DSGVO)</h4>
                  <p>
                    Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten
                    personenbezogenen Daten zu verlangen, soweit nicht die weitere
                    Verarbeitung erforderlich ist.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                  </h4>
                  <p>
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                  </h4>
                  <p>
                    Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Widerspruchsrecht (Art. 21 DSGVO)
                  </h4>
                  <p>
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                    ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener
                    Daten Widerspruch einzulegen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Recht auf Widerruf der Einwilligung
                  </h4>
                  <p>
                    Sofern die Verarbeitung auf Ihrer Einwilligung basiert, können Sie diese
                    jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Beschwerderecht</h4>
                  <p>
                    Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
                    Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder
                    Arbeitsplatzes oder unseres Firmensitzes.
                  </p>
                </div>
              </div>
            </section>

            {/* SSL-Verschlüsselung */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                8. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
                auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* Aktualisierung */}
            <section className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Aktualisierung der Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
                stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen
                unserer Leistungen in der Datenschutzerklärung umzusetzen.
              </p>
              <p className="mt-3 font-semibold">
                Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </div>
  );
}
