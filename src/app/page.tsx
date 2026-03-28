"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Phone, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Menu", id: "menu" },
              { name: "Experience", id: "about" },
              { name: "Reviews", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Norbu"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardGallery
            background={{ variant: "plain" }}
            title="Authentic Flavors in the Heart of Cooperstown"
            description="Experience the warmth of Tibetan hospitality and the vibrant spices of India. Join us for an intimate dining experience you won't soon forget."
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/woman-arranging-dishware-table-restaurant_23-2147936226.jpg", imageAlt: "cozy authentic tibetan restaurant interior" },
              { imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-stuffed-eggplant-rolls-oval-plate-different-spices-grey-background_140725-108202.jpg", imageAlt: "steaming bowl of butter chicken" },
              { imageSrc: "http://img.b2bpic.net/free-photo/delicious-assortment-traditional-roti_23-2149033987.jpg", imageAlt: "fresh garlic naan on wooden platter" },
              { imageSrc: "http://img.b2bpic.net/free-photo/tasty-dumplings-plate-top-view_23-2148249206.jpg", imageAlt: "momos tibetan dumplings on plate" },
              { imageSrc: "http://img.b2bpic.net/free-photo/couple-dinner-exchanging-with-presents_23-2147736713.jpg", imageAlt: "intimate restaurant table setting candlelight" },
              { imageSrc: "http://img.b2bpic.net/free-photo/slice-tasty-tuna-meal-with-glass-white-wine-restaurant_8353-10588.jpg", imageAlt: "indian food spread biryani curry" }
            ]}
            mediaAnimation="slide-up"
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            useInvertedBackground={false}
            tag="Our Story"
            title="Warmth, Culture, and Authentic Cuisine"
            description="Tucked away near the Baseball Hall of Fame, Norbu offers a cozy escape from the bustle. We take pride in our warm atmosphere and friendly, attentive staff."
            subdescription="Whether you are a local or a Hall of Fame visitor, our mission is to make every meal feel like a special occasion."
            imageSrc="http://img.b2bpic.net/free-photo/young-happy-waiter-giving-coffee-his-customers-while-serving-them-coffee-shop_637285-3991.jpg"
            imageAlt="friendly restaurant staff smiling"
            mediaAnimation="blur-reveal"
            icon={Utensils}
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "Butter Chicken", price: "$22.00", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-winter-squash-soup-with-copy-space_23-2148706315.jpg", imageAlt: "butter chicken curry bowl" },
              { id: "p2", name: "Veg Biryani", price: "$18.00", imageSrc: "http://img.b2bpic.net/free-photo/traditional-indian-food-with-rice-tomatoes_23-2148294987.jpg", imageAlt: "vegetable biryani rice bowl" },
              { id: "p3", name: "Tandoori Chicken", price: "$20.00", imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-meat-cutlets-with-onion-rings_140725-57053.jpg", imageAlt: "tandoori chicken plate" }
            ]}
            title="Must-Order Classics"
            description="Hand-crafted dishes bursting with flavor, from our famous garlic naan to our rich, aromatic curries."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTen
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", title: "Wonderful experience", quote: "The staff were wonderfully smiling and personable. Made the meal feel special!", name: "Sarah J.", role: "Visitor", imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-clinking-glasses_23-2149295545.jpg", imageAlt: "happy customer" },
              { id: "t2", title: "Perfect spot", quote: "Cozy, cute, and authentic. A perfect escape on a cold night.", name: "Michael C.", role: "Local", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-restaurant_23-2149250080.jpg", imageAlt: "happy diner" },
              { id: "t3", title: "Incredible lunch value", quote: "The executive lunch is a steal! Two courses for such a great price.", name: "Emily R.", role: "Hall of Fame Visitor", imageSrc: "http://img.b2bpic.net/free-photo/informal-talk-with-best-friends-restaurant-warm-summer-day_8353-9702.jpg", imageAlt: "satisfied customer" },
              { id: "t4", title: "Warm atmosphere", quote: "Really authentic food. The garlic naan arrived steaming hot!", name: "David K.", role: "Foodie", imageSrc: "http://img.b2bpic.net/free-photo/life-after-covid-freedom-concept_23-2149068501.jpg", imageAlt: "happy diner" },
              { id: "t5", title: "Five stars", quote: "The best Indian and Tibetan fusion I have ever had. Highly recommend!", name: "Alice M.", role: "Food Blogger", imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-clinking-glasses_23-2149295545.jpg", imageAlt: "smiling diner" }
            ]}
            title="What Our Guests Say"
            description="Join the many travelers and locals who have found a cozy spot in Cooperstown."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Is the food spicy?", content: "Our kitchen aims to balance flavors for all tastes. If you love high heat, please let your server know your spice level preference!" },
              { id: "f2", title: "Do you offer a lunch menu?", content: "Yes! We offer a popular two-course executive lunch for $16.95 that is a local favorite." },
              { id: "f3", title: "Should I make a reservation?", content: "We recommend reservations for busy nights, especially during Hall of Fame event weekends, to ensure the best experience." }
            ]}
            sideTitle="Planning Your Visit"
            sideDescription="Common questions to help you prepare for your dinner at Norbu."
            faqsAnimation="blur-reveal"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactFaq
            animationType="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "c1", title: "Where are you located?", content: "We are tucked away in a charming alleyway right near the Baseball Hall of Fame." },
              { id: "c2", title: "What are your hours?", content: "We are open daily for lunch and dinner. Check our Google profile or call us for current seasonal hours." }
            ]}
            ctaTitle="Ready for an authentic taste?"
            ctaDescription="Join us today for a cozy, cultural meal in the heart of the city."
            ctaButton={{ text: "Book a Table", href: "tel:5550123" }}
            ctaIcon={Phone}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/woman-arranging-dishware-table-restaurant_23-2147936226.jpg"
            columns={[
              { title: "Explore", items: [{ label: "Menu", href: "#menu" }, { label: "About Us", href: "#about" }] },
              { title: "Connect", items: [{ label: "Reviews", href: "#testimonials" }, { label: "Reservations", href: "tel:5550123" }] }
            ]}
            logoText="Norbu Cooperstown"
            copyrightText="© 2025 Norbu Restaurant"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
