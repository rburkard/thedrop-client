import styled from 'styled-components'

import { TeamMemberComponent } from 'components/TeamMemberComponent'
import { DESKTOP_STYLE, MOBILE_STYLE } from 'constants/variables'

export const UeberUns = () => {
  const team = [
    {
      name: 'Karin Lingg',
      id: 'karin',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      // ausbildung: [
      //   'Dipl Physiotherapeutin FH',
      //   `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
      //   `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
      //   `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
      //   `Dipl. Sportphysiotherapeutin`,
      //   `Kinesiotape`,
      //   `Dipl. Dry Needling Therapeutin`,
      //   `Certified FRC Mobility Specialist (FRCms)`,
      //   `Fasziendistorsionsmodell FDM – Modul 1`,
      //   `Fasziendistorsionsmodell FDM – Modul 2`,
      //   `Gymnastics Injury Prevention`,
      // ],
      // behandlungsmethoden: [
      //   `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
      //   `Manualtherapie (SAMT / Sohier)`,
      //   `Triggerpunkttherapie`,
      //   `Vitalfeldtherapie`,
      //   `Dryneedling`,
      //   `Kinesiotape`,
      //   `Fasziendistorsionsmodell`,
      // ],
      ausbildung: [
        'Ausgebildet in Sportphysio ist Karin deine Ansprechperson für xyz..',
      ],
      behandlungsmethoden: [`Karin behandelt dich/sie in xzy.`],
    },
    {
      name: 'Jana Reuter',
      id: 'jana',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
    {
      name: 'Nina Boser',
      id: 'nina',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
    {
      name: 'Manuela Trunz',
      id: 'manuela',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
    {
      name: 'Marc Fischer',
      id: 'marc',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
    {
      name: 'Samuel Blumer',
      id: 'samuel',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
    {
      name: 'Eva-Maria Burkard',
      id: 'eva-maria',
      image: '',
      motivation:
        'Schmerzfreie Bewegung ist Glück und Freiheit für Körper und Geist.',
      ausbildung: [
        'Dipl Physiotherapeutin FH',
        `Dipl. Manualtherapeutin (Analytische Biomechanik nach Sohier)`,
        `Manuelle Triggerpunkttherapie MT1, MT2, MT3`,
        `Dipl. Manualtherapeutin (SAMT – Mobilisation mit und ohne Impuls)`,
        `Dipl. Sportphysiotherapeutin`,
        `Kinesiotape`,
        `Dipl. Dry Needling Therapeutin`,
        `Certified FRC Mobility Specialist (FRCms)`,
        `Fasziendistorsionsmodell FDM – Modul 1`,
        `Fasziendistorsionsmodell FDM – Modul 2`,
        `Gymnastics Injury Prevention`,
      ],
      behandlungsmethoden: [
        `Physiotherapie / Sportphysiotherapie / Rehabilitation`,
        `Manualtherapie (SAMT / Sohier)`,
        `Triggerpunkttherapie`,
        `Vitalfeldtherapie`,
        `Dryneedling`,
        `Kinesiotape`,
        `Fasziendistorsionsmodell`,
      ],
    },
  ]

  return (
    <Wrapper>
      {team.map((member, idx) => {
        return <TeamMemberComponent member={member} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0px 104px;
  flex-wrap: wrap;

  ${DESKTOP_STYLE}  {
    padding: 0px 104px;
  }

  ${MOBILE_STYLE} {
    padding: 32px 0px;
    justify-content: center;
  }
`
