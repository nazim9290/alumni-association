import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <Box
      className="about-section"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <Box sx={{ m: 4 }}>
        <h1>About</h1>
        <Container>
          <p>
            &#9755; <strong>১৯৫৬</strong> সালে তৎকালীন কুমিল্লা জেলার চাঁদপুর
            মহকুমার হাজীগঞ্জ থানার( বর্তমানে চাঁদপুর জেলার শাহরাস্তি উপজেলায়)
            ঐতিহাসিক মেহের কালীবাড়িতে “নিজমেহার জুনিয়র উচ্চ বিদ্যালয় ”
            প্রতিষ্ঠিত হয়। পরবর্তীতে স্কুলটি পাইলট প্রকল্পে অন্তর্ভুক্ত হওয়ায়
            “নিজমেহার পাইলট উচ্চ বিদ্যালয়” নামকরণ করা হয় এবং ২০১০ সালে সরকারের
            মডেল প্রকল্পে অন্তর্ভুক্ত হওয়ায় “নিজমেহার মডেল পাইলট উচ্চ বিদ্যালয় ”
            নামকরণ করা হয়। প্রতিষ্ঠার পর অত্র বিদ্যালয় থেকে পড়াশোনা করে অনেক
            ছাত্র-ছাত্রী দেশের বিভিন্ন সেক্টরে সফলতা ও কৃতিত্বের সাথে কাজ করছেন…
          </p>
          <Button size="large" variant="contained">
            <Link to="/About">More About Us</Link>
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
