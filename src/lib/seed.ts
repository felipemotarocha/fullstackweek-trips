import { prisma } from "../lib/prisma";

async function main() {
  await prisma.trip.createMany({
    data: [
      {
        name: "Hotel Aurora",
        description:
          "O Hotel Aurora é um refúgio encantador situado em meio às majestosas montanhas. Com seus jardins exuberantes e uma arquitetura elegante, o Aurora oferece quartos espaçosos e bem decorados, gastronomia premiada, um spa luxuoso e uma variedade de instalações de lazer. É o lugar perfeito para os viajantes que buscam uma escapada relaxante e rejuvenescedora, proporcionando uma experiência memorável em um cenário deslumbrante.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Amalfi, Itália",
        countryCode: "IT",
        coverImage:
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 250,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Hotel Palace",
        description:
          "O Hotel Palace é uma joia da hospitalidade, um símbolo de luxo e elegância. Localizado em uma localização privilegiada, o hotel oferece aos hóspedes uma experiência verdadeiramente magnífica. Com quartos deslumbrantes, decoração sofisticada e vistas panorâmicas deslumbrantes, o Palace cativa seus visitantes desde o momento em que entram. Os serviços impecáveis ​​e a atenção aos detalhes garantem uma estadia inesquecível, enquanto os restaurantes requintados e bares elegantes satisfazem os paladares mais exigentes. Com uma ampla gama de instalações de lazer, incluindo spa, academia e piscinas deslumbrantes, o Hotel Palace oferece uma experiência de luxo incomparável para aqueles que buscam o ápice da hospitalidade e conforto.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "New York, Estados Unidos",
        countryCode: "US",
        coverImage:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 350,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Royal Oasis",
        description:
          "A Royal Oasis é um hotel de luxo exclusivo que combina uma arquitetura imponente, decoração refinada e serviços de alta qualidade para proporcionar aos seus hóspedes uma experiência inigualável. Com quartos espaçosos, restaurantes gourmet, instalações de bem-estar e um serviço impecável, este refúgio de tranquilidade e elegância é o local perfeito para aqueles que buscam o melhor em conforto e sofisticação.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Florença, Itália",
        countryCode: "IT",
        coverImage:
          "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Azure Haven Retreat",
        description:
          "O Azure Haven Retreat é um oásis de luxo localizado em uma ilha privativa, onde as águas cristalinas do oceano encontram praias intocadas de areia branca. Com uma arquitetura contemporânea e elegante, este hotel exclusivo oferece aos seus hóspedes uma experiência de refúgio tranquilo e sofisticado. Os quartos e suítes espaçosos e meticulosamente decorados proporcionam um ambiente sereno, enquanto os restaurantes de classe mundial oferecem uma gastronomia requintada com ingredientes frescos e sabores internacionais. Além disso, o Azure Haven Retreat oferece uma variedade de atividades de lazer, como mergulho, iatismo e relaxamento em um spa de luxo, garantindo uma experiência inesquecível de luxo à beira-mar.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Lago Sereno, Suíça",
        countryCode: "CH",
        coverImage:
          "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 600,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Palazzo Sereno",
        description:
          "O Palazzo Sereno é um hotel de luxo localizado em uma cidade histórica da Europa. Com uma arquitetura deslumbrante e um ambiente elegante, o hotel oferece aos hóspedes uma experiência exclusiva de conforto e sofisticação. Os quartos exquisitamente decorados proporcionam um refúgio tranquilo, enquanto os serviços de alta qualidade garantem uma estadia inesquecível. Com uma localização privilegiada, o Palazzo Sereno permite que os hóspedes explorem as belezas da cidade e vivenciem a cultura local com facilidade. Uma estadia neste hotel é uma verdadeira experiência de luxo e requinte.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Madrid, Espanha",
        countryCode: "ES",
        coverImage:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Mountain Peak Lodge",
        description:
          "O Mountain Haven Retreat é um hotel boutique de luxo localizado em uma região montanhosa serena, cercada por paisagens deslumbrantes e tranquilidade. Com quartos elegantemente decorados, o hotel oferece aos hóspedes uma estadia confortável e relaxante, em meio à natureza intocada. Os hóspedes podem desfrutar de refeições gourmet preparadas com ingredientes frescos e locais no restaurante do hotel, enquanto apreciam vistas deslumbrantes das montanhas. Com acesso a trilhas para caminhadas, atividades ao ar livre e um spa relaxante, o Mountain Haven Retreat proporciona aos seus hóspedes uma experiência de luxo em um refúgio natural e encantador.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Montreal, Canadá",
        countryCode: "CA",
        coverImage:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 700,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Encanto da Serra",
        description:
          "O Recanto Sereno é uma pousada encantadora localizada em uma pequena cidade costeira, no litoral sul do Brasil. Com uma atmosfera acolhedora e familiar, a pousada oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são confortáveis e bem decorados, proporcionando um refúgio aconchegante. Os hóspedes podem desfrutar de um café da manhã delicioso, com opções caseiras e regionais, que é servido com carinho. Além disso, o Recanto Sereno está a uma curta caminhada da praia, permitindo que os hóspedes desfrutem de momentos de descanso e lazer à beira-mar. Com uma equipe atenciosa e simpática, o Recanto Sereno proporciona aos seus hóspedes uma estadia relaxante e memorável em um ambiente sereno no litoral do Brasil.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Oslo, Noruega",
        countryCode: "NO",
        coverImage:
          "https://images.unsplash.com/photo-1610530531783-56a4e92a3305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 300,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Rancho Sereno",
        description:
          "O Rancho Sereno é uma fazenda encantadora situada em uma região rural tranquila. Com acomodações simples e acolhedoras, o rancho oferece aos visitantes uma experiência autêntica de vida no campo. Os hóspedes podem desfrutar de momentos de paz e tranquilidade em meio à natureza exuberante, aproveitando trilhas para caminhadas, passeios a cavalo e atividades ao ar livre.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Amsterdam, Holanda",
        countryCode: "NL",
        coverImage:
          "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1596753365498-2d23bbfcbc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1512237798647-84b57b22b517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1509826069158-41fafc8a4a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80",
        ],
        pricePerDay: 100,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Chalé Serenidade",
        description:
          "O Chalé Serenidade é um refúgio encantador situado em uma área montanhosa pitoresca. Com sua arquitetura charmosa e ambiente acolhedor, o chalé oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são aconchegantes e bem decorados, proporcionando um ambiente agradável para descansar e apreciar a beleza da natureza ao redor. Os hóspedes podem desfrutar de momentos de paz em frente à lareira ou explorar trilhas nas proximidades. Com sua localização isolada, o Chalé Serenidade é perfeito para aqueles que buscam uma escapada serena e acolhedora nas montanhas.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Paris, França",
        countryCode: "FR",
        coverImage:
          "https://images.unsplash.com/photo-1515496281361-241a540151a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1614267157481-ca2b81ac6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 200,
        highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
        recommended: false,
        maxGuests: 5,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
