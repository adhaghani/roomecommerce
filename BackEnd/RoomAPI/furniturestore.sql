-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 03:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furniturestore`
--


-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `UserID` varchar(10) NOT NULL,
  `ProductID` varchar(10) NOT NULL,
  `Quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`UserID`, `ProductID`, `Quantity`) VALUES
('UID00002', 'PID00005', 1),
('UID00002', 'PID00012', 1),
('UID00002', 'PID00017', 1),
('UID00002', 'PID00025', 1),
('UID00002', 'PID00031', 1),
('UID00005', 'PID00002', 4);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CategoryID` varchar(10) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CategoryID`, `Name`) VALUES
('CID00001', 'Electronics'),
('CID00002', 'Books'),
('CID00003', 'Sofa'),
('CID00004', 'Plants'),
('CID00005', 'Ergonomic Chair'),
('CID00006', 'Side Table'),
('CID00008', 'Office Table'),
('CID00009', 'Console Table'),
('CID00010', 'Table Lamp'),
('CID00011', 'Chair'),
('CID00012', 'Bed'),
('CID00013', 'Picture Frame');

--
-- Triggers `category`
--
DELIMITER $$
CREATE TRIGGER `before_category_insert` BEFORE INSERT ON `category` FOR EACH ROW BEGIN
    CALL GenerateCategoryID(@newID);
    SET NEW.categoryID = @newID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `liked`
--

CREATE TABLE `liked` (
  `UserID` varchar(10) NOT NULL,
  `ProductID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `liked`
--

INSERT INTO `liked` (`UserID`, `ProductID`) VALUES
('UID00002', 'PID00002'),
('UID00002', 'PID00003'),
('UID00002', 'PID00013'),
('UID00002', 'PID00015'),
('UID00002', 'PID00016'),
('UID00002', 'PID00021'),
('UID00002', 'PID00034'),
('UID00002', 'PID00036'),
('UID00002', 'PID00038'),
('UID00003', 'PID00003'),
('UID00003', 'PID00004'),
('UID00003', 'PID00005'),
('UID00003', 'PID00009'),
('UID00003', 'PID00011'),
('UID00003', 'PID00017'),
('UID00003', 'PID00018'),
('UID00003', 'PID00025'),
('UID00003', 'PID00026'),
('UID00003', 'PID00027'),
('UID00003', 'PID00028'),
('UID00004', 'PID00009'),
('UID00004', 'PID00019'),
('UID00005', 'PID00002'),
('UID00005', 'PID00003'),
('UID00005', 'PID00004'),
('UID00005', 'PID00011'),
('UID00005', 'PID00012'),
('UID00005', 'PID00017'),
('UID00005', 'PID00021'),
('UID00005', 'PID00023'),
('UID00005', 'PID00027'),
('UID00005', 'PID00029'),
('UID00005', 'PID00030'),
('UID00005', 'PID00032'),
('UID00005', 'PID00033'),
('UID00005', 'PID00038'),
('UID00005', 'PID00039');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `OrderID` varchar(10) NOT NULL,
  `ProductID` varchar(10) NOT NULL,
  `Quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`OrderID`, `ProductID`, `Quantity`) VALUES
('OID00007', 'PID00012', 1),
('OID00007', 'PID00017', 1),
('OID00007', 'PID00023', 5),
('OID00007', 'PID00025', 3),
('OID00007', 'PID00027', 1),
('OID00007', 'PID00028', 1),
('OID00009', 'PID00012', 5),
('OID00009', 'PID00017', 1),
('OID00009', 'PID00023', 5),
('OID00009', 'PID00025', 3),
('OID00009', 'PID00027', 1),
('OID00009', 'PID00028', 1),
('OID00010', 'PID00004', 1),
('OID00010', 'PID00005', 1),
('OID00010', 'PID00026', 1),
('OID00010', 'PID00028', 1),
('OID00011', 'PID00002', 2),
('OID00012', 'PID00025', 2),
('OID00013', 'PID00003', 9),
('OID00013', 'PID00004', 1),
('OID00013', 'PID00009', 1),
('OID00014', 'PID00003', 2),
('OID00014', 'PID00005', 1),
('OID00015', 'PID00003', 1),
('OID00016', 'PID00003', 10);

-- --------------------------------------------------------

--
-- Table structure for table `orderrecipient`
--

CREATE TABLE `orderrecipient` (
  `OrderID` varchar(10) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `PostCode` varchar(20) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderrecipient`
--

INSERT INTO `orderrecipient` (`OrderID`, `FirstName`, `LastName`, `PhoneNumber`, `AddressLine1`, `AddressLine2`, `PostCode`, `City`, `Country`) VALUES
('OID00007', 'Ahmad', 'Adha', '0148666823', 'Kolej Tan Sri Aishah Ghani', 'Universiti Putra Malaysia', '43400', 'Petaling', 'Malaysia'),
('OID00009', 'Ahmad', 'Adha', '0148666823', 'Kolej Tan Sri Aishah Ghani', 'Universiti Putra Malaysia', '43400', 'Petaling', 'Malaysia'),
('OID00010', 'Ahmad', 'Adha', '0148666823', 'Kolej Tan Sri Aishah Ghani', 'Universiti Putra Malaysia', '43400', 'Petaling', 'Malaysia'),
('OID00011', 'Ahmad', 'Adha', '0148666823', 'Kolej Tan Sri Aishah Ghani', 'Universiti Putra Malaysia', '43400', 'Petaling', 'Malaysia'),
('OID00012', 'Ahmad Adha', 'Bin Mohd Ghani', '0182017884', 'NO 14 JALAN TENAGA 16 TAMAN TENAGA 43000 KAJANG', '', '43000', 'Kajang', 'Malaysia'),
('OID00013', 'Ahmad Adha', 'Bin Mohd Ghani', '0182017884', 'NO 14 JALAN TENAGA 16 TAMAN TENAGA 43000 KAJANG', '', '43000', 'Kajang', 'Malaysia'),
('OID00014', 'Ahmad Adha', 'Bin Mohd Ghani', '0182017884', 'NO 14 JALAN TENAGA 16 TAMAN TENAGA 43000 KAJANG', '', '43000', 'Kajang', 'Malaysia'),
('OID00015', 'Ahmad Adha ', 'Bin Mohd Ghani ', '0182017884 ', 'NO 14 JALAN TENAGA 16 TAMAN TENAGA 43000 KAJANG', '', '43000 ', 'Kajang ', 'Malaysia '),
('OID00016', 'Muhammad Imran Hakim', 'Bin Muhammad Razif', '0148666823', 'Kolej Tan Sri Aishah Ghani', 'Universiti Putra Malaysia', '43400', 'Petaling', 'Malaysia');

-- --------------------------------------------------------

--
-- Table structure for table `orderstatus`
--

CREATE TABLE `orderstatus` (
  `StatusID` int(11) NOT NULL,
  `StatusName` enum('Pending','Shipped','Delivered','Cancelled') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderstatus`
--

INSERT INTO `orderstatus` (`StatusID`, `StatusName`) VALUES
(1, 'Pending'),
(2, 'Shipped'),
(3, 'Delivered'),
(4, 'Cancelled');

-- --------------------------------------------------------

--
-- Table structure for table `ordertable`
--

CREATE TABLE `ordertable` (
  `OrderID` varchar(10) NOT NULL,
  `UserID` varchar(10) DEFAULT NULL,
  `OrderDate` datetime DEFAULT current_timestamp(),
  `TotalPrice` decimal(10,2) DEFAULT NULL,
  `PaymentMethod` varchar(50) DEFAULT NULL,
  `StatusID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ordertable`
--

INSERT INTO `ordertable` (`OrderID`, `UserID`, `OrderDate`, `TotalPrice`, `PaymentMethod`, `StatusID`) VALUES
('OID00007', 'UID00003', '2024-05-29 13:06:28', 2924.85, 'Card', 2),
('OID00009', 'UID00003', '2024-05-29 13:43:36', 4256.85, 'Cash', 3),
('OID00010', 'UID00004', '2024-05-29 22:40:53', 455.10, 'Cash', 3),
('OID00011', 'UID00004', '2024-05-30 11:14:06', 555.00, 'Cash', 3),
('OID00012', 'UID00004', '2024-05-30 11:15:57', 44.40, 'Cash', 2),
('OID00013', 'UID00004', '2024-05-30 20:24:46', 3540.90, 'Cash', 2),
('OID00014', 'UID00002', '2024-05-30 22:09:35', 754.80, 'Cash', 4),
('OID00015', 'UID00005', '2024-05-31 10:51:13', 333.00, 'Cash', 4),
('OID00016', 'UID00004', '2024-06-02 15:12:23', 3330.00, 'Cash', 1);

--
-- Triggers `ordertable`
--
DELIMITER $$
CREATE TRIGGER `BeforeInsertOrder` BEFORE INSERT ON `ordertable` FOR EACH ROW BEGIN
    DECLARE newID VARCHAR(10);
    
    -- Call the stored procedure to generate the new OrderID
    CALL GenerateOrderID(newID);
    
    -- Set the new OrderID
    SET NEW.OrderID = newID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ProductID` varchar(10) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL,
  `Price` decimal(10,2) NOT NULL,
  `ProductStock` int(11) DEFAULT NULL,
  `DateAdded` date NOT NULL DEFAULT current_timestamp(),
  `CategoryID` varchar(10) DEFAULT NULL,
  `PicturePath` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ProductID`, `Name`, `Description`, `Price`, `ProductStock`, `DateAdded`, `CategoryID`, `PicturePath`) VALUES
('PID00002', 'HOLMERUD', 'Introducing our Small and Elegant Console Table, HOLMERUD a perfect blend of sophistication and functionality designed to elevate the aesthetic of any room. This exquisite piece is crafted with meticulous attention to detail, ensuring it seamlessly complements both contemporary and classic interiors.', 250.00, 25, '2024-05-09', 'CID00006', 'http://localhost/CSC264/RoomAPI/ProductImage/664dbbf956dcd_Picture2.png'),
('PID00003', 'HAVSTA', 'Introducing our Luxury Look Console Table, a stunning embodiment of opulence and sophistication designed to enhance the elegance of any interior. Crafted with premium materials and meticulous attention to detail, this console table is the perfect addition for those who appreciate the finer things in life.', 300.00, 223, '2024-05-22', 'CID00009', 'http://localhost/CSC264/RoomAPI/ProductImage/664dcf775e9d5_Picture1.jpg'),
('PID00004', 'LISTERBY', 'With its vintage-inspired design, this console table features intricate detailing and a beautifully aged finish that adds character and charm to any space. The elegant curves and carved accents reflect the craftsmanship of a bygone era. Made from high-quality wood and finished with attention to detail, this table combines beauty and durability for lasting appeal.', 290.00, 47, '2024-05-23', 'CID00009', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9b16e2bb6_Picture3.jpg'),
('PID00005', 'ÅRSTID', 'Combine several lamps from the series to create a soft, comfortable light and a unified look.', 80.00, 97, '2024-05-23', 'CID00010', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9b62ac950_Picture1.jpg'),
('PID00006', 'FLUGBO', 'This table lamp with clean lines and a mouth-blown lampshade in frosted glass suits most styles and spreads a soft, pleasant light in your room.', 100.00, 75, '2024-05-23', 'CID00010', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9b7ae87a5_Picture2.jpg'),
('PID00007', 'SALNÖ', 'SALNÖ armchair is easy to bring home since it comes in a flat package. Made from handwoven rattan, a natural material that makes each armchair unique – and with a cushion set that makes it really comfy.', 150.00, 35, '2024-05-23', 'CID00011', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9ba946b0b_Picture3.jpg'),
('PID00008', 'VÄRMANSÖ', 'Shaped for comfort with a curved back and armrests to relax your shoulders. Add a comfy seat cushion and you are set for hours of chit-chat. The rust-proof material outlasts years of carefree outdoor use.', 300.00, 25, '2024-05-23', 'CID00011', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9bc20fa5b_Picture4.jpg'),
('PID00009', 'FRÖKNABO', 'Made of handwoven rattan, bamboo and wood – natural materials that make each armchair unique. Just as functional as decorative with its soft shapes and comfy cushions that embrace you when you sit down', 200.00, 14, '2024-05-23', 'CID00011', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9bd82c898_Picture5.jpg'),
('PID00011', 'VEDBO', 'The timeless design of VEDBO makes it easy to place in various room settings and match with other furniture. VEDBO armchair is ideal when you want to relax in your own space in an open environment, yet still want the opportunity to socialise with others when you like.', 300.00, 20, '2024-05-23', 'CID00011', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9bff91155_Picture7.jpg'),
('PID00012', 'PERSBOL', 'A crafted feel and timeless design. PERSBOL spindle armchair fits wherever you want to create nooks to spend time with family or enjoy some nice me-time. A classic that only gets more beautiful with time.', 300.00, 20, '2024-05-23', 'CID00011', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9c298dfc5_Picture6.jpg'),
('PID00013', 'KIVIK', 'Enjoy the super comfy KIVIK sofa with deep seat cushions made of pocket springs, high resilience foam and polyester fibres – adding both firm support and relaxing softness.', 5900.00, 5, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9c4b1a957_Picture1.jpg'),
('PID00014', 'JÄTTEBO ', 'JÄTTEBO modular sofa has a simple shape with clean lines and is soft, comfortable – and practical with storage under the seat. The cover is easy to keep clean since it can be machine washed and is easy to take off and put on again.', 2300.00, 8, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9c63984de_Picture2.jpg'),
('PID00015', 'FRIHETEN', 'This sofa converts quickly and easily into a spacious bed when you remove the back cushions and pull out the underframe. Sofa, chaise longue, and double bed in one.', 3000.00, 8, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9c7a9e4f5_Picture3.jpg'),
('PID00016', 'KLIPPAN', 'Extra covers to alternate with mean it\'s easy to give both your sofa and room a new look.The cover is easy to keep clean since it is removable and can be machine washed.', 1000.00, 18, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9ca3ad40f_Picture4.jpg'),
('PID00017', 'FRIHETEN', 'You can quickly transform this sofa into a spacious bed. And the generous storage space for bed linens under the seat makes things even easier. A perfect place to sleep for you or your overnight guests.', 2200.00, 10, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9cb7e125a_Picture5.jpg'),
('PID00018', 'GLOSTAD', 'GLOSTAD sofa has a simple design which is also comfortable with its thick seat, padded armrests, and soft back cushions that sit firmly in place.The sofa\'s low weight makes it easy to move – in your current home or when moving to a new home.', 900.00, 14, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9cdb418e4_Picture6.jpg'),
('PID00019', 'ESSEBODA', 'ESSEBODA sofa stands out with its soft comfort, generous shape and well-thought-out design it’s great throughout the home and can be matched with other items in the series for versatile use.', 2000.00, 32, '2024-05-23', 'CID00003', 'http://localhost/CSC264/RoomAPI/ProductImage/664e9cf0cc638_Picture7.jpg'),
('PID00020', 'CALATHEA LOUISAE', 'Calathea Louisae is an adoring, colorful plant boasting beautiful leaves and a unique color pattern. It perfectly displays the beauty of the Calathea family, known for its exotic foliage with ornate, symmetrical shapes.', 20.00, 13, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb20e706c8_Picture1.jpg'),
('PID00021', 'PEPEROMIA', 'This plant is hardwearing and easy-care, so you can create a green home without being a gardening expert.', 17.00, 6, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb239ea134_Picture2.jpg'),
('PID00023', 'FEJBU', 'Perfect if you can\'t have a live plant, but still want to enjoy the beauty of nature.', 6.00, 10, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb26b0222b_Picture4.jpg'),
('PID00024', 'DRACAENA MARGINATA', 'This tough plant withstands dryness and is easy-care. Perfect if you are a beginner when it comes to plants. A wonderful roommate that makes your home more vibrant.', 30.00, 20, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb27596945_Picture5.jpg'),
('PID00025', 'FEJKA', 'FEJKA artificial potted plants that don’t require a green thumb. Perfect when you have better things to do than water plants and tidy up dead leaves. You’ll have everyone fooled because they look so lifelike.', 20.00, 10, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb2882e7fa_Picture6.jpg'),
('PID00026', 'ALOCASIA AMAZONICA', 'Invite plants into your home, enjoy nature´s beautiful leaves – and allow the lush vibrant greenery to inspire you. If you need tips on how to make them thrive, we have care instructions for each plant.', 25.00, 0, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb2a5f3fd2_Picture7.jpg'),
('PID00027', 'CACTACEAE', 'A true survivor that’s used to tough environments. In the wild, the spines protect against animals and collect dew that drips down into the soil. A reliable roommate who stays by your side year after year.', 30.00, 38, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb2b421cb1_Picture8.jpg'),
('PID00028', 'ASPLENIUM', 'Invite plants into your home, enjoy nature´s beautiful leaves – and allow the lush vibrant greenery to inspire you. If you need tips on how to make them thrive, we have care instructions for each plant.', 15.00, 32, '2024-05-23', 'CID00004', 'http://localhost/CSC264/RoomAPI/ProductImage/664eb2c5be8b1_Picture9.jpg'),
('PID00029', 'LEIRVIK', 'If you’re a romantic, you’ll find it hard to resist these decorative curves in white steel. Make the bed with beautiful textiles and pillows and enjoy your dreams with fairy tale endings.', 598.00, 30, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656ea640bcd0_Picture1.jpg'),
('PID00030', 'MALM', 'A clean design that’s just as beautiful on all sides – place the bed freestanding or with the headboard against a wall. You also get spacious storage boxes that roll out smoothly on castors.', 455.00, 30, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656ea7a16b71_Picture2.jpg'),
('PID00031', 'GRIMSBU', 'This upholstered bed frame makes your bedroom feel soft and warm. The curved headboard and piped edges create a classic look – and the entire cover is removable and machine washable.', 685.00, 30, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eaa4c3631_Picture3.jpg'),
('PID00032', 'VEVELSTAD', 'VEVELSTAD is a versatile bed frame that is great to match with other furnishings. It has a simple and clean design  and is easy to both buy and take home since it’s sold as one compact package.', 570.00, 25, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eab9a7443_Picture4.jpg'),
('PID00033', 'KLEPPSTAD', 'KLEPPSTAD has a stylish and modern design with a metal bed frame and a cosy textile headboard. Easy to both buy and take home since it’s sold as two compact packages. So practical and convenient!', 550.00, 25, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656ead867058_Picture5.jpg'),
('PID00034', 'TARVA', 'TARVA bed frame is a modern example of Scandinavian furniture tradition – a simple design and a timeless expression mixes nicely with a variety of other styles and furniture', 650.00, 25, '2024-05-29', 'CID00012', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eae3746fa_Picture6.jpg'),
('PID00035', 'EDSBRUK', 'Enhance your space with our sleek black frame, sized perfectly at 50x70 cm to showcase your favourite art or photos with modern elegance. Crafted for durability and style, this frame effortlessly complements any decor, making it a timeless addition to your home or office.', 35.00, 35, '2024-05-29', 'CID00013', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eb273fae0_Picture1.png'),
('PID00036', 'RÖDALM', 'Add a touch of natural elegance to your space with our beautifully crafted wood frame, sized at 80x50 cm. This timeless piece is perfect for displaying your cherished photos or artwork, bringing warmth and sophistication to any room.', 50.00, 1, '2024-05-29', 'CID00013', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eb3f5f7b5_Picture2.png'),
('PID00038', 'LERBODA', 'Our small wooden frame, sized at 16x22 cm, is ideal for displaying your cherished photos or artwork on a table or desk. This compact piece brings natural warmth and elegance to any space, making it a perfect, stylish accent for your home or office.', 20.00, 10, '2024-05-29', 'CID00013', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eb68df81c_Picture3.png'),
('PID00039', 'RAMSBORG', 'Transform your decor with our stunning wooden frame, measuring 50x70 cm, ideal for displaying your cherished photos or artwork. This elegant frame adds a natural warmth and timeless charm to any room, effortlessly enhancing your walls.', 40.00, 5, '2024-05-29', 'CID00013', 'http://localhost/CSC264/RoomAPI/ProductImage/6656eb7e62c6b_Picture4.png');

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `before_product_insert` BEFORE INSERT ON `product` FOR EACH ROW BEGIN
    CALL GenerateProductID(@newID);
    SET NEW.productID = @newID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `ReviewID` varchar(10) NOT NULL,
  `UserID` varchar(10) DEFAULT NULL,
  `ProductID` varchar(10) DEFAULT NULL,
  `ReviewText` text DEFAULT NULL,
  `ReviewDate` datetime DEFAULT current_timestamp(),
  `ReviewTitle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`ReviewID`, `UserID`, `ProductID`, `ReviewText`, `ReviewDate`, `ReviewTitle`) VALUES
('RID00001', 'UID00002', 'PID00003', 'My Sons love the table !', '2024-05-28 17:05:55', 'Great Product'),
('RID00002', 'UID00002', 'PID00003', 'The table is a great addition to my bedroom!', '2024-05-28 17:07:33', 'Loving it!'),
('RID00003', 'UID00002', 'PID00003', 'The design fits my aesthethic', '2024-05-28 17:16:00', 'Lovely Design!'),
('RID00004', 'UID00002', 'PID00003', 'My daughter Loves it!', '2024-05-28 17:16:43', 'Lovely'),
('RID00005', 'UID00002', 'PID00003', 'The design is very Human !', '2024-05-28 17:17:43', 'Nice'),
('RID00006', 'UID00002', 'PID00020', 'The plant fits my room so well ! it makes it so lively.', '2024-05-28 17:19:11', 'Very nice plant'),
('RID00007', 'UID00004', 'PID00008', 'I LOVE IT, IT\'S SO COMFORTABLE AND MY FAMILY LOVES IT TOO!', '2024-05-28 17:42:31', 'GREAT PRODUCT! '),
('RID00008', 'UID00004', 'PID00025', 'The plant is a nice touch to my dying living room.', '2024-05-28 17:43:11', 'Love It !'),
('RID00009', 'UID00004', 'PID00003', 'My son Loves it!', '2024-05-30 20:14:58', 'Loving it'),
('RID00010', 'UID00004', 'PID00009', 'test', '2024-05-30 20:23:44', 'test');

--
-- Triggers `review`
--
DELIMITER $$
CREATE TRIGGER `before_review_insert` BEFORE INSERT ON `review` FOR EACH ROW BEGIN
    CALL GenerateReviewID(@newID);
    SET NEW.reviewID = @newID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `useraccount`
--

CREATE TABLE `useraccount` (
  `UserID` varchar(10) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `RoleID` int(11) DEFAULT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `emailAddress` varchar(100) NOT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `addressLine1` varchar(100) DEFAULT NULL,
  `addressLine2` varchar(100) DEFAULT NULL,
  `postCode` varchar(10) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `dateRegistered` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `useraccount`
--

INSERT INTO `useraccount` (`UserID`, `Username`, `Password`, `RoleID`, `firstName`, `lastName`, `emailAddress`, `phoneNumber`, `addressLine1`, `addressLine2`, `postCode`, `city`, `country`, `dateRegistered`) VALUES
('UID00001', 'Admin', 'Admin', 1, 'Ahmad Adha', 'Bin Mohd Ghani', 'adhaahmad04@gmail.com', '0182017884', 'NO 14 Jalan Tenaga 16 ', 'Taman Tenaga', '43000', 'Kajang', 'Malaysia', '2024-05-23'),
('UID00002', 'SitiComel', 'Siti@12345', 2, 'Siti', 'bin Aisyah', 'siti@gmail.com', '01125807221', 'No 13 Jalan Tenaga 16 ', 'Taman Tenaga', '43000', 'Kajang', 'Malaysia', '2024-05-23'),
('UID00003', 'ImranPro', 'Abu@1234', 2, 'Imran', 'Hakim', 'ImranHakim@gmail.com', '01122223333', 'No 15 Jalan Kuatan 14', 'Kuantan', '25350', 'Kuantan', 'Malaysia', '2024-05-24'),
('UID00004', 'ImranHensem', 'Imran@123', 2, 'Muhammad imran Hakim', 'Bin Muhammad Razif', 'ImranHakim@gmail.com', '011222333444', 'no 13 jalan 12 abu bakar', 'taman abu bakar', '253330', 'Kajang', 'Philipine', '2024-05-27'),
('UID00005', 'FathHensem', 'Fath@123', 2, 'Muhammad Fathudden ', 'Bin Mohd Fairuz', 'Fathudeen@gmail.com', '0193346578', 'no 14 Jalan Tenaga 16  ', 'Taman Tenaga', '43000', 'Kajang', 'Malaysia', '2024-05-31');

--
-- Triggers `useraccount`
--
DELIMITER $$
CREATE TRIGGER `before_user_insert` BEFORE INSERT ON `useraccount` FOR EACH ROW BEGIN
    CALL GenerateUserID(@newID);
    SET NEW.userID = @newID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `RoleID` int(11) NOT NULL,
  `RoleName` enum('Admin','Customer') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userrole`
--

INSERT INTO `userrole` (`RoleID`, `RoleName`) VALUES
(1, 'Admin'),
(2, 'Customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`UserID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `liked`
--
ALTER TABLE `liked`
  ADD PRIMARY KEY (`UserID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`OrderID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `orderrecipient`
--
ALTER TABLE `orderrecipient`
  ADD PRIMARY KEY (`OrderID`);

--
-- Indexes for table `orderstatus`
--
ALTER TABLE `orderstatus`
  ADD PRIMARY KEY (`StatusID`),
  ADD UNIQUE KEY `StatusName` (`StatusName`);

--
-- Indexes for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `FK_OrderStatus` (`StatusID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `FK_UserRole` (`RoleID`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`RoleID`),
  ADD UNIQUE KEY `RoleName` (`RoleName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orderstatus`
--
ALTER TABLE `orderstatus`
  MODIFY `StatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `userrole`
--
ALTER TABLE `userrole`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `useraccount` (`UserID`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `liked`
--
ALTER TABLE `liked`
  ADD CONSTRAINT `liked_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `useraccount` (`UserID`),
  ADD CONSTRAINT `liked_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `ordertable` (`OrderID`),
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `orderrecipient`
--
ALTER TABLE `orderrecipient`
  ADD CONSTRAINT `orderrecipient_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `ordertable` (`OrderID`);

--
-- Constraints for table `ordertable`
--
ALTER TABLE `ordertable`
  ADD CONSTRAINT `FK_OrderStatus` FOREIGN KEY (`StatusID`) REFERENCES `orderstatus` (`StatusID`),
  ADD CONSTRAINT `ordertable_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `useraccount` (`UserID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `useraccount` (`UserID`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD CONSTRAINT `FK_UserRole` FOREIGN KEY (`RoleID`) REFERENCES `userrole` (`RoleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateCategoryID` (OUT `newID` VARCHAR(10))   BEGIN
    DECLARE lastID VARCHAR(10);
    DECLARE lastNumber INT;

    -- Get the last inserted categoryID
    SELECT categoryID INTO lastID
    FROM category
    ORDER BY categoryID DESC
    LIMIT 1;

    -- Extract the numeric part from the lastID and increment it
    IF lastID IS NULL THEN
        SET lastNumber = 1;
    ELSE
        SET lastNumber = CAST(SUBSTRING(lastID, 4) AS UNSIGNED) + 1;
    END IF;

    -- Format the new ID
    SET newID = CONCAT('CID', LPAD(lastNumber, 5, '0'));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateNotificationID` (OUT `newID` VARCHAR(10))   BEGIN
    DECLARE lastID VARCHAR(10);
    DECLARE lastNumber INT;

    SELECT NotificationID INTO lastID
    FROM notification
    ORDER BY NotificationID DESC
    LIMIT 1;

    IF lastID IS NULL THEN
        SET lastNumber = 1;
    ELSE
        SET lastNumber = CAST(SUBSTRING(lastID, 4) AS UNSIGNED) + 1;
    END IF;

    SET newID = CONCAT('NID', LPAD(lastNumber, 5, '0'));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateOrderID` (OUT `newOrderID` VARCHAR(10))   BEGIN
    DECLARE maxID INT DEFAULT 0;
    DECLARE newID INT;

    -- Extract the numeric part of the highest current OrderID
    SELECT MAX(CAST(SUBSTRING(OrderID, 4) AS UNSIGNED)) INTO maxID
    FROM OrderTable;

    -- Calculate new ID
    SET newID = IFNULL(maxID, 0) + 1;

    -- Format new ID as OID00001, OID00002, etc.
    SET newOrderID = CONCAT('OID', LPAD(newID, 5, '0'));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateProductID` (OUT `newID` VARCHAR(10))   BEGIN
    DECLARE lastID VARCHAR(10);
    DECLARE lastNumber INT;

    SELECT productID INTO lastID
    FROM product
    ORDER BY productID DESC
    LIMIT 1;

    IF lastID IS NULL THEN
        SET lastNumber = 1;
    ELSE
        SET lastNumber = CAST(SUBSTRING(lastID, 4) AS UNSIGNED) + 1;
    END IF;

    SET newID = CONCAT('PID', LPAD(lastNumber, 5, '0'));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateReviewID` (OUT `newID` VARCHAR(10))   BEGIN
    DECLARE lastID VARCHAR(10);
    DECLARE lastNumber INT;

    SELECT ReviewID INTO lastID
    FROM review
    ORDER BY ReviewID DESC
    LIMIT 1;

    IF lastID IS NULL THEN
        SET lastNumber = 1;
    ELSE
        SET lastNumber = CAST(SUBSTRING(lastID, 4) AS UNSIGNED) + 1;
    END IF;

    SET newID = CONCAT('RID', LPAD(lastNumber, 5, '0'));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateUserID` (OUT `newID` VARCHAR(10))   BEGIN
    DECLARE lastID VARCHAR(10);
    DECLARE lastNumber INT;

    SELECT userID INTO lastID
    FROM useraccount
    ORDER BY userID DESC
    LIMIT 1;

    IF lastID IS NULL THEN
        SET lastNumber = 1;
    ELSE
        SET lastNumber = CAST(SUBSTRING(lastID, 4) AS UNSIGNED) + 1;
    END IF;

    SET newID = CONCAT('UID', LPAD(lastNumber, 5, '0'));
END$$

DELIMITER ;
