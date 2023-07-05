import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

const services = [
  {
    id: '1',
    title: 'Room',
    price: '$50',
    thumbnail: require('./thumbnails/room.jpg'),
    description: 'Our hostel offers cozy and comfortable rooms that provide a welcoming retreat for travelers seeking budget-friendly accommodations without compromising on quality and convenience. Step into our hostel room and discover a thoughtfully designed space that caters to your basic needs while ensuring a comfortable stay. Each room is equipped with essential amenities to make your stay as pleasant as possible. Our rooms come in various sizes and configurations to suit different travel needs. We offer dormitory-style rooms with bunk beds for those who prefer a social atmosphere and are open to sharing with fellow travelers. These rooms typically accommodate multiple guests, with separate lockers provided to secure personal belongings. For those seeking more privacy, we also offer private rooms that can accommodate individuals or small groups. These rooms usually feature a comfortable bed or beds, a writing desk, and storage space for your belongings. Some private rooms may also include an en-suite bathroom for added convenience. Regardless of the room type, our priority is to ensure cleanliness and comfort. We maintain high standards of cleanliness throughout our hostel, including regular housekeeping services in the rooms and common areas. Fresh linens and towels are provided, and our staff is readily available to address any additional requests or concerns you may have.'
  },
  {
    id: '2',
    title: 'Food',
    price: '$10',
    thumbnail: require('./thumbnails/food.jpg'),
    description: 'At our hostel, we understand that good food is an essential part of a satisfying travel experience. That is why we offer a range of food services to cater to your culinary needs and preferences during your stay. Our onsite dining options provide convenient and delicious meals right at your doorstep. Whether you are looking for a quick bite or a hearty meal, our food services ensure that you have access to nourishing and tasty options without having to venture far from your accommodation. Start your day off right with our breakfast service. We offer a variety of options, including continental breakfasts with freshly baked pastries, bread, cereals, fruits, and hot beverages. It is the perfect way to fuel up for a day of exploring or relaxation. For lunch and dinner, our hostel features a menu that showcases a range of appetizing dishes. From local specialties to international favorites, our culinary offerings are designed to satisfy diverse tastes and dietary preferences. Our talented chefs prepare each dish with care, using fresh ingredients and flavors that will tantalize your taste buds. If you are looking for a quick snack or something to satisfy those late-night cravings, our hostel also offers a snack bar or café where you can find light bites, sandwiches, beverages, and more. It is a convenient option for when you want a quick pick-me-up or a casual meal.'
  },
  {
    id: '3',
    title: 'Spa Treatments',
    price: '$20 per person',
    thumbnail: require('./thumbnails/spa.jpg'),
    description: 'Indulge in a world of relaxation and rejuvenation at our exquisite spa facility. Our spa offers a serene and tranquil haven where you can escape the stresses of everyday life and embark on a journey of self-care and wellness. Step into our spa and immerse yourself in a soothing ambiance designed to calm your senses. The soft lighting, aromatic scents, and tranquil music create an atmosphere of serenity, providing the perfect setting for your spa experience. We offer a comprehensive range of treatments and services to cater to your specific needs. From rejuvenating massages and invigorating body scrubs to luxurious facials and pampering spa packages, our experienced therapists are dedicated to providing exceptional care and personalized attention. Each treatment is carefully designed to promote relaxation, alleviate tension, and enhance your overall well-being. Our skilled therapists utilize a combination of techniques and premium spa products to ensure a blissful and transformative experience.'
  },
  {
    id: '4',
    title: 'Early Check-In/Late Check-out',
    price: '$10 per person',
    thumbnail: require('./thumbnails/checkIn.jpg'),
    description: 'Similarly, if you need some extra time before departing, we offer the convenience of a late check-out. This allows you to extend your stay past the regular check-out time, giving you more flexibility in your travel plans. Late check-out is subject to availability, and we recommend contacting us in advance to inquire about the possibility and any associated fees. The pricing for early check-in and late check-out services may vary depending on factors such as the requested timing and availability. Our aim is to provide flexible options that suit your needs while ensuring a smooth transition for all guests. Our friendly staff will be happy to assist you with the details and provide you with the necessary information regarding fees and availability. Please note that early check-in and late check-out services are subject to availability and may not be possible during periods of high occupancy. We recommend contacting us in advance to discuss your specific requirements and make the necessary arrangements. By offering early check-in and late check-out services, we aim to provide convenience and flexibility for our guests, allowing you to make the most of your time at our hostel. We understand that travel plans can be unpredictable, and we strive to accommodate your needs to the best of our ability. We invite you to inquire about our early check-in and late check-out services to ensure a smooth and enjoyable stay that aligns with your travel schedule. Our team is here to assist you and make your stay as comfortable and convenient as possible.'
  },
  {
    id: '5',
    title: 'Extra Beds',
    price: '$10',
    thumbnail: require('./thumbnails/beds.jpg'),
    description: 'At our hostel, we understand the need for flexibility when it comes to accommodation. That is why we offer the option of extra beds for guests who require additional sleeping arrangements. Whether you are traveling with family or friends, our extra beds provide a comfortable solution to accommodate everyone. Our extra beds are designed to ensure a restful night sleep. They are equipped with comfortable mattresses, fresh linens, and pillows, providing the same level of comfort as our regular beds. We strive to maintain the same quality standards across all our sleeping arrangements. The availability and types of extra beds may vary depending on the room type and size. We offer options such as rollaway beds, sofa beds, or folding beds to suit different needs. Please note that the availability of extra beds may be limited, and we recommend contacting us in advance to check availability and make necessary arrangements. The pricing for extra beds depends on factors such as the type of bed and the duration of your stay. Our rates are competitive and aim to provide affordable options for our guests. You can inquire about the pricing and availability of extra beds when making your reservation or upon check-in. Please note that the number of extra beds allowed per room may be subject to occupancy limits and regulations. We encourage guests to communicate their specific requirements during the booking process to ensure a smooth and comfortable stay. With our extra beds, you can ensure that everyone in your group has a cozy place to sleep, maximizing the comfort and convenience of your stay at our hostel. We strive to provide a welcoming and accommodating environment for all our guests, regardless of the size of your party. We invite you to inquire about our extra bed options and make the necessary arrangements to ensure a comfortable and enjoyable stay for everyone. Our team is here to assist you and ensure that your accommodation needs are met to the best of our ability.'
  },
  {
    id: '6',
    title: 'Minibar',
    price: '$5 per person',
    thumbnail: require('./thumbnails/minibar.jpg'),
    description: 'Indulge in convenience and refreshment with our minibar facility at the hostel. The minibar offers a selection of beverages and snacks right in the comfort of your room, allowing you to satisfy your cravings at any time. Our minibar is stocked with a variety of refreshing drinks, including sodas, bottled water, juices, and other non-alcoholic beverages. It is perfect for quenching your thirst after a long day of exploring or for enjoying a relaxing evening in your room. In addition to beverages, our minibar also offers a range of snacks and treats. You will find a tempting assortment of chocolates, nuts, chips, and other quick bites to satisfy your hunger pangs. These snacks are ideal for a light snack or to accompany your favorite beverage. Each item in the minibar is individually priced, allowing you to choose exactly what you desire. Our prices are competitive and reflect the convenience and service provided. Please note that consumption from the minibar is charged separately and may be settled upon check-out. We strive to keep our minibar well-stocked and replenished regularly, ensuring that you have a variety of choices available throughout your stay. If you have any special requests or preferences, our friendly staff is available to assist you. Please note that specific policies and guidelines may be in place regarding the minibar, such as minimum consumption requirements or restrictions on personal items. We kindly ask all guests to familiarize themselves with these guidelines to ensure a smooth and enjoyable experience. With our minibar facility, you can enjoy a refreshing drink or treat without having to leave the comfort of your room. It is a convenient amenity that adds a touch of luxury to your stay at our hostel. We invite you to explore the offerings of our minibar facility and treat yourself to a delightful selection of beverages and snacks. It is the perfect way to unwind and enjoy a moment of indulgence during your time at our hostel.'
  },
  {
    id: '7',
    title: 'Swimming Pool',
    price: '$5 per person',
    thumbnail: require('./thumbnails/swimming.jpg'),
    description: 'Enjoy a refreshing and relaxing experience at our hostelss swimming pool facility. Our swimming pool offers a perfect oasis for guests to unwind, cool off, and have fun during their stay. The swimming pool is designed with both leisure and fitness in mind. Whether you want to take a leisurely swim or engage in some invigorating exercise, our pool is the ideal place to do so. Immerse yourself in the crystal-clear waters and feel the stress melt away. Surrounded by comfortable lounge chairs and umbrellas, our poolside area provides a serene setting to soak up the sun, read a book, or simply unwind. Its the perfect spot to enjoy some quality relaxation time or socialize with other guests. Safety is our top priority, and our swimming pool facility is maintained to the highest standards. Our staff regularly monitors and maintains the pool cleanliness and water quality, ensuring a safe and hygienic environment for all our guests. Access to our swimming pool facility is included in the room rate, allowing you to enjoy the benefits of the pool without any additional charges. It a fantastic amenity to take advantage of during your stay, especially on hot days or when you simply want to take a break from your daily activities.Please note that specific rules and guidelines may be in place to ensure the safety and enjoyment of all guests. These may include designated swimming hours, age restrictions, and basic pool etiquette. We kindly ask all guests to adhere to these guidelines for everyone benefit.Whether you are looking to relax, cool off, or engage in some aquatic fun, our swimming pool facility provides a delightful retreat within our hostel. Dive in, rejuvenate, and make the most of your stay with us. We invite you to indulge in the pleasures of our swimming pool facility and enjoy a refreshing escape during your time at our hostel.'
  },
  {
    id: '8',
    title: 'Birthday Party',
    price: '$120',
    thumbnail: require('./thumbnails/birthday.jpg'),
    description: 'Celebrate your birthday in style at our hostelss exclusive party venue. Our dedicated birthday party venue provides a fun and vibrant space to gather with your friends and loved ones for a memorable celebration. Our venue offers a versatile setting that can be customized to suit your party theme and preferences. With ample space for activities and seating arrangements, you can host an intimate gathering or a lively party. The vibrant decor, including colorful balloons, streamers, and birthday banners, sets the festive mood and adds a touch of excitement to your celebration. To make your birthday party a breeze, we offer various services and amenities. Our friendly staff is on hand to assist you in planning and organizing your event. From helping with decorations to arranging catering services, we ensure that every detail is taken care of, allowing you to relax and enjoy your special day. Our birthday party venue is equipped with audiovisual equipment, including sound systems and lighting, to create an entertaining atmosphere. Whether you want to dance the night away, play games, or enjoy live music, our venue provides the perfect setup for a memorable celebration. Pricing for our birthday party venue varies based on factors such as the size of the party, duration, and any additional services or amenities required. We offer competitive rates and customizable packages to fit your budget and specific party needs. By choosing our birthday party venue, you can create lasting memories and celebrate your special day in a lively and welcoming environment. Our dedicated team is committed to ensuring that your birthday party is a fun-filled and unforgettable experience. We invite you to host your birthday party at our venue and let us take care of the details. Get ready for a celebration full of joy, laughter, and wonderful moments with your loved ones.'
  },
  {
    id: '9',
    title: 'Marriage Hall',
    price: '$500',
    thumbnail: require('./thumbnails/marriage.jpg'),
    description: 'Our marriage hall is an exquisite and spacious venue designed to create a magical setting for your special day. With its elegant interiors and customizable features, our marriage hall provides the perfect backdrop for weddings and other celebratory events. The hall is thoughtfully designed to accommodate a range of wedding sizes, from intimate gatherings to grand affairs. It features ample space for seating arrangements, dance floors, stages, and other wedding requirements. The beautiful decor, including draperies, lighting arrangements, and floral arrangements, adds a touch of elegance and romance to the ambiance. To ensure a seamless experience, we offer a range of services and amenities. Our dedicated event planning team works closely with you to understand your vision and assists in organizing every aspect of your wedding. From coordinating with vendors to arranging catering services, we take care of the details so that you can focus on enjoying your special day. Our marriage hall is equipped with modern audiovisual equipment to enhance your celebrations. We provide state-of-the-art sound systems, projectors, screens, and lighting facilities to create an immersive experience for you and your guests. In addition to the main hall, we offer well-appointed bridal rooms and separate areas for guests to relax and socialize. These spaces provide privacy and comfort, allowing the bride and groom to prepare and unwind during their wedding day. Pricing for our marriage hall varies based on factors such as the size of the event, duration, and any additional services required. We offer competitive rates and customizable packages to suit your specific needs and budget.'
  },
  {
    id: '10',
    title: 'Conference Hall',
    price: '$300',
    thumbnail: require('./thumbnails/conference.jpg'),
    description: 'Our hostel is proud to offer a versatile and well-equipped conference hall facility, perfect for hosting various events and gatherings. Whether you are planning a business meeting, a workshop, a seminar, or a social event, our conference hall provides an ideal space to accommodate your needs. Our conference hall is designed to create a professional and comfortable environment. It is equipped with modern audiovisual equipment, including projectors, screens, sound systems, and microphones. These facilities ensure that your presentations, speeches, and discussions are delivered effectively and with clarity. The flexible layout of our conference hall allows for various seating arrangements, accommodating both small and large groups. Our friendly and professional staff will work closely with you to customize the setup according to your event requirements. In addition to the physical space, we also offer comprehensive event services, including catering options, coffee breaks, and personalized assistance from our dedicated staff. We understand that every event is unique, and we strive to provide a seamless experience to ensure its success. The pricing for our conference hall facility varies depending on the size of the event, duration, and any additional services required. We offer competitive rates to suit different budgets and event types. Please contact our team for detailed pricing information and to discuss your specific event requirements. By choosing our conference hall facility, you can benefit from a convenient and professional venue within the comfort of our hostel. Our goal is to provide a supportive and inspiring environment for your event, whether it is for business or social purposes. We invite you to explore the possibilities of hosting your next event at our conference hall facility. Our team is dedicated to ensuring that your event is a success, with a focus on excellent service and attention to detail.'
  },
  {
    id: '11',
    title: 'Parking Fee',
    price: '$10 per day',
    thumbnail: require('./thumbnails/parking.jpg'),
    description: 'At our hostel, we understand the importance of convenient and secure parking for our guests who arrive by car. We offer parking services to ensure that you have a hassle-free experience during your stay. Our parking facilities provide a safe and designated area to park your vehicle. For a nominal fee of $10 per day, guests can enjoy the convenience of on-site parking. However, please note that parking availability is subject to limited spaces, as we prioritize the comfort of all our guests. We recommend contacting us in advance to inquire about parking availability and reserve a spot. Our parking area is monitored by CCTV cameras and security personnel to ensure the safety of your vehicle. While parked at our hostel, you can have peace of mind and enjoy your stay without worrying about your cars security. Whether you are visiting us for a short stay or an extended period, our parking services provide a convenient solution for your transportation needs. We aim to provide a comfortable and stress-free experience for all our guests, including those traveling by car. Please note that parking services may be subject to local regulations and availability. We encourage guests to reach out to our staff for any specific inquiries or additional information regarding parking arrangements. With our parking services, you can focus on enjoying your time at our hostel and exploring the surrounding area, knowing that your vehicle is securely parked nearby.'
  },
  {
    id: '12',
    title: 'Laundry Services',
    price: '$1 per cloth',
    thumbnail: require('./thumbnails/laundry.jpg'),
    description: 'At our hostel, we understand the importance of keeping your clothes fresh and clean while traveling. Thats why we offer convenient and efficient laundry services for our guests. Our laundry facilities are equipped with modern washing machines and dryers, ensuring that your laundry is taken care of with utmost care and quality. Whether you are staying for a few days or a longer duration, our laundry services cater to all your needs. We offer both self-service and full-service options to suit your preferences. If you prefer to handle your laundry yourself, you can use our self-service facilities at your convenience. We provide instructions and detergent for your use. For those who prefer a hassle-free experience, our friendly staff is available to take care of your laundry for you. Simply drop off your clothes, and we will wash, dry, and fold them professionally. Our laundry services are priced competitively, and the rates vary depending on the type and quantity of items. We ensure that your clothes are treated with care, using suitable detergents and following proper laundry procedures. While your laundry is being taken care of, you can relax and enjoy your time at the hostel or explore the nearby attractions. With our laundry services, you can travel light and have the convenience of clean clothes throughout your stay. Whether you are on a backpacking adventure or a business trip, our hostel laundry services are here to make your stay more comfortable and hassle-free.'
  },
  {
    id: '13',
    title: 'Buffet',
    price: '$12 per person',
    thumbnail: require('./thumbnails/buffet.jpg'),
    description: 'The hostel offers a delightful buffet breakfast to kickstart your day. Included in the room rate, the buffet breakfast provides a wide variety of delicious options to suit different tastes and dietary preferences. The breakfast spread features a selection of freshly baked pastries, bread, and cereals for a wholesome start. Guests can enjoy a range of hot and cold dishes, including scrambled eggs, sausages, bacon, fresh fruits, yogurt, and an assortment of cheeses. To complement the meal, a choice of juices, coffee, and tea is also available. Whether you prefer a hearty breakfast or a light and healthy meal, the buffet offers something for everyone. With the buffet breakfast, guests can fuel up for a day of exploring or relax and savor the morning in a cozy dining area.'
  }

  // Add more service objects here
];

const ServiceList = ({ navigation }) => {
    const translateYAnim = useRef(new Animated.Value(-100)).current;
  
    useEffect(() => {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [translateYAnim]);
  
    const renderItem = ({ item }) => {
      const animatedStyles = {
        transform: [{ translateY: translateYAnim }],
      };
  
      return (
        <Animated.View style={[styles.itemContainer, animatedStyles]}>
          <TouchableOpacity onPress={() => navigation.navigate('ServiceDetail', { service: item })}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.thumbnailContainer}>
              <Image source={item.thumbnail} style={styles.thumbnail} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
        </div>
          </TouchableOpacity>
        </Animated.View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Available Services</Text>
        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#F5F5F5',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      textAlign: 'center',
    },
    flatListContent: {
      paddingBottom: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
    },
    thumbnailContainer: {
      marginRight: 10,
    },
    thumbnail: {
      width: 80,
      height: 80,
      borderRadius: 5,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    price: {
      fontSize: 16,
      color: '#777',
    },
  });
  
  export default ServiceList;