import { customColors } from 'constants/colors'
import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'
import { useState } from 'react'
import styled from 'styled-components'

export const Angebot = () => {
  const offers: Array<{ title: string; image: string; text: string }> = [
    {
      title: 'Physiotherapie',
      image: '',
      text: `Physiotherapeutinnen erbringen Leistungen an und für Personen, um eine grösstmögliche Bewegungs- und Funktionsfähigkeit des Menschen über das ganze Leben hinweg zu entwickeln, zu erhalten und wiederherzustellen. Physiotherapie wird auch dann eingesetzt, wenn die Bewegungs- und Funktionsfähigkeit eines Menschen durch den Alterungsprozess, durch Krankheit oder Unfall beeinträchtigt ist. Physiotherapie behandelt und korrigiert Einschränkungen und Beeinträchtigungen der Bewegungs- und Funktionsfähigkeit sinnvoll und funktionsorientiert. Dabei bezieht sich die Physiotherapie auf die Definition der Weltgesundheitsorganisation (WHO), welche die Gesundheit als einen Zustand des umfassenden körperlichen, geistigen und sozialen Wohlbefindens und nicht lediglich mit dem Freisein von Krankheit und Gebrechen definiert. Auf Basis dieser Definition werden in der Physiotherapie die biologischen, psychologischen, sozialen und individuellen Aspekte einer Krankheit oder Verletzung in Zusammenhang gebracht und ganzheitlich angegangen.`,
    },
    {
      title: 'Sportphysiotherapie',
      image: '',
      text: `Die Sportphysiotherapie ist ein eigenständiger Bereich innerhalb der Physiotherapie. Zielgruppe sind sowohl Leistungs-/ als auch Freizeitsportler während der Aufbauphase, des Trainings oder in der Rehabilitation nach Verletzungen oder Operationen.

      Der Physiotherapeut kombiniert sein fundiertes Wissen über Körper, physiologische Bewegungsabläufe, Erkrankungen bzw. Verletzungen. Ausserdem gehören Kentnisse über die jeweilige Sportart und deren typischen Verletzungsmuster dazu , um eine optimale Prävention oder Rehabilitation von Verletzungen zu gewährleisten.
      Mit speziellen Übungen und physiotherapeutische Techniken kann man die Belastbarkeit durch die Heilungszeit optimieren.`,
    },
    {
      title: 'Manuelle Therapie',
      image: '',
      text: `Manuelle Therapien und Techniken gehören zu den ältesten medizinischen Handgriffen und existieren seit Jahrtausenden in allen Kulturen auf unterschiedlichste Weise. Man kann sie bis in die Antike zurückverfolgen. Schon Hippokrates war die Traktionstechnik bekannt.

      In der Manuellen Therapie sind die Hände (lateinisch manus = die Hand) das wichtigste Untersuchungs- und Behandlungsinstrument. Mit den Händen ertastet der Therapeut/die Therapeutin sorgfältig Ihre Muskeln, Sehnen und Gelenke. Er/sie erspürt Blockaden und Funktionsstörungen an Ihrer Wirbelsäule und ertastet Verspannungen im Gewebe, die Ihnen Schmerzen bereiten können. Ziel der Manuellen Therapie ist es, eine angemessene Behandlung durchzuführen und diese Störungen zu beheben. Diese Handgriffe werden sowohl zur Schmerzlinderung, als auch zur Mobilisation von Bewegungseinschränkungen eingesetzt. Sie sind schonend und in der Regel schmerzlos.`,
    },
    {
      title: 'Triggerpunkte',
      image: '',
      text: `Myofasziale Triggerpunkte sind außerordentlich verbreitet und werden früher oder später zu einem quälenden Bestandteil im Leben jedes einzelnen. Latente Triggerpunkte, die eine gewisse Steifigkeit und ein eingeschränktes Bewegungsausmaß hervorrufen können, sind weit stärker verbreitet als aktive Triggerpunkte. Mit fortschreitendem Alter und abnehmender Aktivität werden Steifigkeit und eingeschränkte Beweglichkeit latenter Triggerpunkte auffallender als der Schmerz. Trotz ihrer Schmerzhaftigkeit sind myofasziale Triggerpunkte nicht direkt lebensbedrohlich, aber der Schmerz kann die Lebensqualität beeinträchtigen.

      Myofaszialer Triggerpunkt:
      
      Eine übererregbare Stelle innerhalb eines verspannten Muskelbündels (Hartspannstrang / „taut band“) in einem Skelettmuskel oder in der Faszie des Muskels, die druckschmerzhaft ist und charakteristischen Übertragungsschmerz („referred pain“), Empfindlichkeit und autonome Phänomene hervorrufen kann. Der Myofasziale Triggerpunkt ist von Haut-, Ligament-, Periost- und nicht muskulären faszialen Triggerpunkten zu unterscheiden.
      
      Aktiver myofaszialer Triggerpunkt:
      
      Ein meist kleiner Herd erhöhter Reizbarkeit in einem Muskel oder in seiner Faszie, der für den Schmerz kennzeichnend ist. Er überträgt in Ruhe und / oder Bewegung ein für den Muskel spezifisches Schmerzmuster. Er ist immer empfindlich, verhindert die volle Verlängerung des Muskels, schwächt den Muskel, überträgt üblicherweise bei Kompression Schmerz, vermittelt eine lokale Zuckungsreaktion („local twitch response“) der Muskelfasern, wenn er entsprechend gereizt wird und führt oft zu speziellen übertragenen autonomen Phänomenen, die im allgemeinen in seiner Schmerzreferenzzone auftreten.
      
      Latenter myofaszialer Triggerpunkt:
      
      Ein meist kleiner Herd erhöhter Reizbarkeit in einem Muskel oder seiner Faszie, der hinsichtlich des spontanen Schmerzes klinisch latent ist. Er ist nur beim Palpieren schmerzhaft.
      
      Assoziierter myofaszialer Triggerpunkt:
      
      Ein kleiner Bereich erhöhter Reizbarkeit in einem Muskel oder seiner Faszie, entstanden als Reaktion auf kompensatorische Überlastung, Verkürzung oder Übertragungsphänomene durch Triggerpunktaktivität in einem anderen Muskel. Sekundär- und Satellit-Triggerpunkte sind Formen der assoziierten myofaszialen Triggerpunkte.
      
      Übertragener Schmerz:
      
      In einem Triggerpunkt entstehender Schmerz, der aber im Abstand davon, oft völlig getrennt von seinem Ursprung, empfunden wird. Das Muster des übertragenen Schmerzes ist reproduzierbar verbunden mit seinem Herkunftsort. Die Verteilung von übertragenem Triggerpunktschmerz stimmt selten mit der vollständigen Ausbreitung eines peripheren Nervs oder Dermatoms überein.
      
      Übertragene Phänomene:
      
      Sensorische und motorische Erscheinungen, zum Beispiel Schmerz, Druckschmerzhaftigkeit, verstärkte Aktivität motorischer Einheiten (Spasmus), Vasokonstriktion, evtl. Vasodilatation und Hypersekretion verursacht durch einen Triggerpunkt, tritt aber normalerweise in einiger Entfernung auf.
      
      Unwillkürliche Ausweichbewegung (jump sign):
      
      Eine allgemeine Schmerzreaktion des Patienten. Als Reaktion auf einen Triggerpunkt angewandten Druck zuckt er zusammen, schreit auf und weicht aus. Hauptschmerzzone: Jener Bereich des Übertragungsschmerzes, der bei einem aktiven Triggerpunkt konstant bei nahezu jedem Patienten vorhanden ist. Nebenschmerzzone: Die Region, in der einige, aber nicht alle Patienten, bei größerer Reizbarkeit eines Triggerpunktes über die Hauptschmerzzone hinaus Übertragungsschmerz empfinden.`,
    },
    {
      title: 'Vitalfeldtherapie',
      image: '',
      text: `Die ganzheitliche Medizin betrachtet den Körper als ein Gesamtsystem, das nur dann gut funktionieren kann, wenn alle Vorgänge reibungslos ablaufen. Tritt eine Störung an einem Körperteil auf, sind unter dieser Betrachtungsweise mehr oder weniger alle Körperfunktionen betroffen. 

      Bei einer nur geringen Störung schafft der Körper im Zusammenspiel aller Kräfte einen Ausgleich und behebt den Schaden wieder. Sind jedoch ein oder mehrere Körperteile geschwächt oder arbeiten nicht optimal, macht sich das nicht in jedem Fall sofort mit Schmerzen bemerkbar. Bleiben körperliche Störungen weiterhin unbeachtet, kann das im Laufe der Zeit dazu führen, dass die Belastbarkeit des gesamten Körpers sinkt.
      
      Es ist von Vorteil, vorbeugend zu handeln. In jedem Fall kann die energetische Situation des Körpers helfen, die richtigen Behandlungsprioritäten einzuschätzen.
      
       Die Vitalfeldtherapie arbeitet mit einem Messsystem auf rein physikalischer Grundlage, um die energetischen Zustände des Körpers zu messen und zu analysieren.`,
    },
    {
      title: 'Klassische Ganz- und Teilkörpermassage',
      image: '',
      text: `Die Klassische Massage ist in unserem Alltag eine entspannende und gleichzeitig eine therapeutische Methode. Durch Berührungen kann eine innere Balance hergestellt werden, so dass die eigenen Heilkräfte im Körper in Bewegung gesetzt werden. Die Massage hat nicht nur eine vorbeugendende Wirkung, sondern hilft auch bei akuten Schmerzen und Erkrankungen des Bewegungsapparates. Durch achtsames Erkennen von zusammenhängenden Problemzonen kann die Behandlung Verspannungen und Verhärtungen der Muskulatur lösen, das Gewebe lockern und hilft auch Kopfschmerzen zu lindern. Die Durchblutung aller Gewebeschichten wird angeregt, verbessert den Kreislauf, so dass ein Gefühl von Entspannung, innerer Ruhe und Ausgeglichenheit zugelassen werden kann.

      Die Therapie wird bei verschiedenen Beschwerden angewandt:
      
      Verdauungsbeschwerden
      Rücken-, Gelenkschmerzen und Muskelverspannungen
      Hormonelle Störungen
      Kopfschmerz , Allergien
      Ausleitend bei Infektionen, Entgiftung
      Verbessert den Lymphfluss
      Erschöpfungszustände, Stressabbau
      Rheumatische Beschwerden`,
    },
    {
      title: 'Manuelle Lymphdrainage',
      image: '',
      text: `Bei der manuellen Lymphdrainage handelt es sich um eine spezielle Massagetechnik, mit der Lymphstauungen im Gewebe beseitigt werden können.

      Das Lymphgefässsystem des Körpers hat die Aufgabe, die Flüssigkeit (Lymphe) aus dem Gewebe aufzunehmen und in die Blutgefässe abzuleiten. Eine gestörte Funktionsfähigkeit dieses Drainagesystems zum Beispiel infolge von Verletzungen oder nach Operationen kann zu einer Ansammlung von Flüssigkeit in den Zellzwischenräumen führen. Als Folge davon können Schwellungen (Ödeme) entstehen. Die manuelle Lymphdrainage ist eine entstauende Massnahme, mit deren Hilfe die Motorik der Lymphgefässe angeregt und damit der Abtransport überschüssiger Gewebsflüssigkeit erleichtert werden soll. Darüber hinaus hat die Lymphdrainage eine stark entspannende und beruhigende Wirkung und sie regt das Immunsystem an.`,
    },
    {
      title: 'Fussreflexzonen-Massage Therapie',
      image: '',
      text: `Die Fussreflexzonenmassage wurde schon vor vielen tausend Jahren in Indien und China angewandt und ist heute noch eine unterstützende Therapieform. Alle unsere Körperteile, Organe und Drüsen spiegeln sich in unseren Füssen wieder. Durch eine Tastdiagnose, kann spezifisch auf das Problem eingegangen werden. Die Behandlung wird da angesetzt, wo sie bei Beschwerden, einer Krankheit oder Operation am besten unterstützend wirken kann. Mit dem Berühren und Arbeiten an den Füssen lösen wir Reize aus, die reflektorisch unsere Organe besser durchbluten, Spannungen abbauen und den ganzen Organismus harmonisieren und stabilisieren.

      Die Therapie wird bei verschiedenen Beschwerden angewandt:
      
      Verdauungsbeschwerden
      Rücken –Gelenkschmerzen und Muskelverspannungen
      Hormonelle Störungen
      Kopfschmerzen , Allergien
      Ausleitend bei Infektionen, Entgiftung
      Verbessert den Lymphfluss
      Erschöpfungszustände, Stressabbau
      Rheumatische Beschwerden`,
    },
    {
      title: 'Elektrotherapie',
      image: '',
      text: `Die Elektrotherapie gehört zu den Verfahren der physikalischen Therapie. Mit Hilfe von elektronischen Geräten fliessen elektrische Ströme unterschiedlicher Frequenz durch den Körper oder Körperteile, um Krankheiten zu behandeln.

      Heute wird die Elektromedizin in praktisch allen klinischen Bereichen angewendet. Ein Teilbereich der Elektromedizin ist die Elektrotherapie, die zu den physiotherapeutischen Behandlungsmethoden zählt.
      
      Im Rahmen der Elektrotherapie kommen Ströme mit unterschiedlichen Frequenzen zum Einsatz. Man spricht von Niederfrequenztherapie, im Bereich von 0-1000 Hz. Für die Mittelfrequenztherapie arbeitet man im Bereich von 1000-100’000 Hz. Im Hochfrequenztherapiebereiche werden nie mehr als 100’000 Hz verwendet. Die Ströme werden dem Körper über Elektroden in einem Wasserbad oder direkt auf der Haut zugeführt.
      
      Im Organismus hat der Strom eine schmerzlindernde und durchblutungsfördernde Wirkung. Je nach Therapieform kann die Behandlung ausserdem entweder zu einer Entspannung oder zu einer Erregung der behandelten Muskulatur beitragen.
      
      Aufgrund der guten Leitfähigkeit verläuft der Stromfluss entlang der Blut- und Lymphgefässe. Tiefere Strukturen im Körper werden durch die Elektrotherapie nur schwer erreicht. Weitere gute Stromleiter sind: Hirnflüssigkeit, Harn, die inneren Organe und Muskulatur. Schlechte Stromleiter sind: Fettgewebe, Gelenkkapseln, Sehnen, Knochen und bestimmte Nerven. Nichtleiter sind Haare und Nägel sowie die Hornschicht trockener Haut.`,
    },
    {
      title: 'Ultraschall',
      image: '',
      text: `Ultraschall ist eine Anwendung, die im weitesten Sinn auch zur Elektrotherapie zählt. Hierbei wird der Strom über hochfrequente Schallwellen von ca. 1 MHz in den Körper übertragen.

      Der Ultraschall wird über einen Schallkopf mit ca. 5-6cm2 Fläche über ein Kontaktgel auf die erkrankte Region aufgetragen und dabei kreisend bewegt. Der Schall wird dabei kontinuierlich oder pulsierend abgegeben. Beim pulsierenden Schall entsteht weniger Wärmewirkung und er ist dadurch weniger intensiv.
      
      Die Wirkung zeigt sich in einer verstärkten Durchblutung und einem verbesserten Zellstoffwechsel. Die Schmerzschwelle wird damit angehoben. Somit können Verletzungen in Muskel- und Sehnengewebe schneller heilen. Ultraschall wird häufig kombiniert mit der klassischen Elektrotherapie eingesetzt.
      
      Ultraschall wird eingesetzt:
      
      paravertebral neben der Wirbelsäule
      an den grossen Gelenken
      bei Muskelverletzungen
      bei Sehnenreizung oder- verletzungen.
      Wärmeanwendungen`,
    },
    // {
    //   title: 'MTT Medizinische Trainingstherapie',
    //   image: '',
    //   text: `Die Medizinische Trainingstherapie hat das Ziel, Fähigkeit und Fertigkeiten eines Menschen zurückzugewinnen und zu stabilisieren. Es soll eine funktionelle Stabilität erreicht und die allgemeine und spezielle Leistungsfähigkeit und Belastungsfähigkeit verbessert werden.

    //   Die Medizinische Trainingstherapie beinhaltet ein auf sie zugeschnittenes, individuelles Trainingsprogramm, welches Ihnen im Alltag und im Sport hilft, wieder einen Schritt näher an ihre Ziele zu gelangen. `,
    // },
    {
      title: 'Kinesiotape',
      image: '',
      text: `Kinesiotaping soll Schmerzen lindern und die Durchblutung in den behandelten Arealen verbessern. Es zielt vor allem auf muskuläre Probleme, die eine Reihe von Problemen und Erkrankungen hervorrufen können.

      Hierzu werden äußerst elastische, einige Zentimeter breite, atmungsaktive und auf Baumwollbasis hergestellte Klebestreifen auf die Haut in der Nähe schmerzhafter Bereiche aufgebracht.
      
      Erklärt wird die Wirkung damit, dass die Tapes die Haut unter Spannung setzen und damit die obersten Hautschichten leicht angehoben und bei jeder Bewegung leicht massiert werden. Dadurch soll der Blutfluss und Lymphabfluss erleichtert und gefördert werden, so dass verletzte Regionen besser durchblutet werden, um den körpereigenen Erholungsprozess zu fördern.
      
      Außerdem erzeugen die Entzündungsreaktionen und Verletzungen die Ansammlung von Blut oder Gewebeflüssigkeit oder eine Schwellung und damit Druck auf die zwischen den Hautschichten sitzenden Schmerzrezeptoren. Durch die elastischen Tapes wird der Druck auf die Rezeptoren reduziert, was zu einer Schmerzlinderung führen kann.
      
      Dies ermöglicht es, die betroffenen Körperteile wieder normal zu bewegen und hat zur Folge, dass weniger Schonhaltungen eingenommen werden und schmerzhafte Verkrampfungen vermieden werden. Die Kinesiotapes bieten eine gewisse Stabilität, lenken die Bewegungsrichtung und vor allem fördern sie die Wahrnehmung der Muskeln, der eigenen Belastbarkeit und Beweglichkeit, die sogenannte Propriozeption. Dadurch wird eine bessere Bewegung und eine Verbesserung des Muskeltonus (Muskelspannung) bewirkt. Durch die elastischen Eigenschaften schränken sie den Bewegungsumfang des Gelenkes nicht ein.`,
    },
    // {
    //   title: 'Fango',
    //   image: '',
    //   text: `Was ist Fango? Was ist Naturmoor?

    //   Fango und Naturmoor sind reine Naturprodukte, die seit langem als Wärme- (manchmal auch als Kälte-) Anwendungen verabreicht werden.

    //   Fango ist vulkanisches Gestein. Es wird fein gemahlen, als Naturfango gereinigt und mit Feuchtigkeit versetzt als Schlamm angewandt.

    //   Die Hauptwirkung des Fango liegt in seiner hohen Wärmekapazität. Fango kann mit ca. 55°C angewendet werden und verliert in einer Stunde nur rund 5°C. Damit können grossflächige Muskelverspannungen sehr gut behandelt werden und bewirkt eine gesteigerte Durchblutung von Haut und Muskulatur sowie eine starke Tonussenkung.`,
    // },
    {
      title: 'Craniosacral Therapie',
      image: '',
      text: `Craniosacral Therapie ist eine Körpertherapie zur Mobilisierung der Selbstheilungskräfte. Sie hilft dem Körper, sich an seinem ursprünglichen Bauplan auszurichten, sozusagen sein Gedächtnis von seinem gesunden Originalzustand aufzufrischen.

      Dieser Prozess wird eingeleitet, indem die Hände an den bekleideten Körper der Klientin/ des Klienten gelegt werden. Wir lassen ihn erzählen, spüren seine Rhythmen und inneren Bewegungen. Dies geschieht auf der Ebene des Liquors (Hirnrückenmarkflüssigkeit) sowie der Nerven, Muskeln, Knochen, Organe und des Bindegewebes. Dabei stellt sich ein tiefer Entspannungszustand ein und der Körper beginnt sich mit therapeutischer Unterstützung neu auszurichten, was von der Klientin/ dem Klienten ganz unterschiedlich, z.B. als Wellen durch den Körper, Hitze, Schmerzlinderung, Änderung der Körperwahrnehmung erlebt wird.
      
      Wir arbeiten nach der biodynamischen Methode.
      
      Für wen ist die Craniosacral Therapie geeignet?
      
      Craniosacral Therapie ist eine sanfte, liebevolle Behandlungsform, die sich für Erwachsene ebenso gut wie für Babys, Kinder und Jugendliche eignet. Sie kann helfen, sobald etwas aus dem Gleichgewicht geraten ist, sich Unwohlsein, Krankheit, Schmerzen oder Unruhe breit machen.
      
      Dazu gehören:
      
      Bewegungsapparat, Muskeln, Gelenke, Nerven
      Schlafstörungen, Nervosität, Verspannungen
      Kopfschmerzen, Migräne, Zähneknirschen
      Gereiztheit, Ungeduld, Sorgen wälzen, Erschöpfung
      Babys: Unruhe, Schiefhals, Schreikinder, Verdauungsprobleme
      Mehr Informationen dazu erhalten sie auf der Homepage von Craniosuisse.`,
    },
  ]

  const [currMethod, setCurrMethod] = useState<number>()

  // const [contentState, setContentState] = useState('static')

  return (
    <Wrapper>
      <OffersWrapper>
        {offers.map((offer, idx) => {
          return (
            <MethodTile
              key={idx}
              onMouseEnter={() => {
                setCurrMethod(idx)
              }}
              onClick={() => {
                setCurrMethod(idx)
              }}
            >
              <Overlay
                style={{
                  background:
                    currMethod === idx ? 'none' : customColors.signaturePurple,
                }}
              >
                <h3
                  style={{
                    color: 'white',
                  }}
                >
                  {currMethod === idx ? '' : offer.title}
                </h3>
              </Overlay>
              <img
                alt="behandlungsmethode"
                src={`methods/bild${idx}.jpg`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </MethodTile>
          )
        })}
      </OffersWrapper>
      <DescriptionWrapper>
        {currMethod !== undefined && (
          <Content>
            <h1 style={{ marginBottom: 32 }}>{offers[currMethod].title}</h1>
            <p style={{ fontSize: 18 }}>{offers[currMethod].text}</p>
          </Content>
        )}
      </DescriptionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 200px);

  ${DESKTOP_STYLE}  {
    flex-direction: row;
    padding: 0px 104px;
    overflow: hidden;
  }

  ${MOBILE_STYLE} {
    flex-direction: column;
    padding: 40px 0px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  &.content-changed {
    opacity: 0;

    animation: appearTextContent;
    animation-duration: 3s;
    animation-fill-mode: forwards;

    @keyframes appearTextContent {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`
const OffersWrapper = styled.div`
  display: flex;
  flex: 1 1 930px;
  max-width: 930px;
  height: 700px;
  flex-wrap: wrap;

  ${DESKTOP_STYLE} {
    align-items: flex-start;
  }

  ${MOBILE_STYLE} {
    justify-content: center;
  }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 700px;
  padding: 16px;
  overflow-y: auto;

  ${DESKTOP_STYLE} {
    align-items: flex-start;
  }

  ${MOBILE_STYLE} {
    display: none;
  }
`

const Overlay = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  /* background-color: ${customColors.signaturePurple}; */
  opacity: 1;

  transition-property: opacity;
  transition: 0.2s ease-in;
`

const MethodTile = styled.div`
  margin: 16px;
  background-color: beige;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  transition-property: transform;
  transition: 0.2s ease-in;

  ${DESKTOP_STYLE}  {
    width: 200px;
    height: 200px;
  }

  ${MOBILE_STYLE} {
    width: calc(100vw - 100px);
    height: 320px;
  }

  /* :hover ${Overlay} {
    opacity: 0;
  } */

  :hover {
    transform: scale(1.1);
  }
`
