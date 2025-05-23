import trendImg1 from "../assets/trending1.png";
import trendImg2 from "../assets/trending2.png";
import trendImg3 from "../assets/trending3.png";
import trendCrt1 from "../assets/creat-trending1.png";
import trendCrt2 from "../assets/creat-trending2.png";
import trendCrt3 from "../assets/creat-trending3.png";
import crtImg1 from "../assets/topCreator1.png";
import crtImg2 from "../assets/topCreator2.png";
import crtImg3 from "../assets/topCreator3.png";
import crtImg4 from "../assets/topCreator4.png";
import crtImg5 from "../assets/topCreator5.png";
import crtImg6 from "../assets/topCreator6.png";
import crtImg7 from "../assets/topCreator7.png";
import crtImg8 from "../assets/topCreator8.png";
import crtImg9 from "../assets/topCreator9.png";
import crtImg10 from "../assets/topCreator10.png";
import crtImg11 from "../assets/topCreator11.png";
import crtImg12 from "../assets/topCreator12.png";
import cateImage1 from "../assets/categoryImg1.png";
import cateImage2 from "../assets/categoryImg2.png";
import cateImage3 from "../assets/categoryImg3.png";
import cateImage4 from "../assets/categoryImg4.png";
import cateImage5 from "../assets/categoryImg5.png";
import cateImage6 from "../assets/categoryImg6.png";
import cateImage7 from "../assets/categoryImg7.png";
import cateImage8 from "../assets/categoryImg8.png";
import brush from "../assets/PaintBrush.png";
import Basketball from "../assets/Basketball.png";
import Camera from "../assets/Camera.png";
import MagicWand from "../assets/MagicWand.png";
import MusicNotes from "../assets/MusicNotes.png";
import Planets from "../assets/Planet.png";
import Swatches from "../assets/Swatches.png";
import VideoCamera from "../assets/VideoCamera.png";
import discoImg1 from "../assets/disco-nft1.png";
import discoImg2 from "../assets/disco-nft2.png";
import discoImg3 from "../assets/disco-nft3.png";
import dArtImg1 from "../assets/discoArtImg1.png";
import dArtImg2 from "../assets/discoArtImg2.png";
import dArtImg3 from "../assets/discoArtImg3.png";
import Wallet from "../assets/set-wallet.svg";
import Collection from "../assets/create-coll.svg";
import Earnings from "../assets/st-earning.svg";

const Navlinks = [
  { id: "1", title: "Marketplace", path: "Marketplace", condition: false },
  { id: "2", title: "Rankings", path: "Rankings", condition: false },
  { id: "3", title: "Profile", path: "Connect", condition: true },
];

const heroStats = [
  { stat: "240k+", name: "Total Sale" },
  { stat: "210k+", name: "Auctions" },
  { stat: "100k+", name: "Artists" },
];

const trending = [
  {
    trendArtImg: trendImg1,
    artName: "DSGN Animals",
    artistImg: trendCrt1,
    artistName: "Mrfox",
  },
  {
    trendArtImg: trendImg2,
    artName: "Magic Mushrooms",
    artistImg: trendCrt2,
    artistName: "Shroomie",
  },
  {
    trendArtImg: trendImg3,
    artName: "Disco Machines",
    artistImg: trendCrt3,
    artistName: "BeKind2Robots",
  },
];

const topCreators = [
  { id: 1, creatorImg: crtImg1, creatorName: "Keepitreal", sales: "34.53 Eth" },
  { id: 2, creatorImg: crtImg2, creatorName: "DigiLab", sales: "34.53 Eth" },
  { id: 3, creatorImg: crtImg3, creatorName: "GravityOne", sales: "34.53 Eth" },
  { id: 4, creatorImg: crtImg4, creatorName: "Juanie", sales: "34.53 Eth" },
  { id: 5, creatorImg: crtImg5, creatorName: "BlueWhale", sales: "34.53 Eth" },
  { id: 6, creatorImg: crtImg6, creatorName: "Mr Fox", sales: "34.53 Eth" },
  { id: 7, creatorImg: crtImg7, creatorName: "Shroomie", sales: "34.53 Eth" },
  { id: 8, creatorImg: crtImg8, creatorName: "Robotica", sales: "34.53 Eth" },
  { id: 9, creatorImg: crtImg9, creatorName: "RustyRobot", sales: "34.53 Eth" },
  { id: 10, creatorImg: crtImg10, creatorName: "Animakid", sales: "34.53 Eth" },
  { id: 11, creatorImg: crtImg11, creatorName: "Dotgu", sales: "34.53 Eth" },
  { id: 12, creatorImg: crtImg12, creatorName: "Ghiblier", sales: "34.53 Eth" },
];

const Categories = [
  { cateImg: cateImage1, cateIcon: brush, cateName: "Art" },
  { cateImg: cateImage2, cateIcon: Swatches, cateName: "Collectibles" },
  { cateImg: cateImage3, cateIcon: MusicNotes, cateName: "Music" },
  { cateImg: cateImage4, cateIcon: Camera, cateName: "Photography" },
  { cateImg: cateImage5, cateIcon: VideoCamera, cateName: "Video" },
  { cateImg: cateImage6, cateIcon: MagicWand, cateName: "Utility" },
  { cateImg: cateImage7, cateIcon: Basketball, cateName: "Sport" },
  { cateImg: cateImage8, cateIcon: Planets, cateName: "Virtual Worlds" },
];

const discover = [
  {
    disImage: discoImg1,
    discoName: "Distant Galaxy",
    artImg: dArtImg1,
    artName: "MoonDancer",
    price: "1.63 wETH",
    bid: "0.67wETH",
  },
  {
    disImage: discoImg2,
    discoName: "Life On Edena",
    artImg: dArtImg2,
    artName: "NebulaKid",
    price: "2.03 wETH",
    bid: "1.78wETH",
  },
  {
    disImage: discoImg3,
    discoName: "Astrofiction",
    artImg: dArtImg3,
    artName: "Spaceone",
    price: "1.86 wETH",
    bid: "0.7wETH",
  },
];

const Guide = [
  {
    guideName: "Setup Your Wallet",
    guideDesc:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    guideImg: Wallet,
  },
  {
    guideName: "Create Collection",
    guideDesc:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    guideImg: Collection,
  },
  {
    guideName: "Start Earning",
    guideDesc:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    guideImg: Earnings,
  },
];

export default {
  Navlinks,
  heroStats,
  trending,
  Categories,
  topCreators,
  discover,
  Guide,
};
