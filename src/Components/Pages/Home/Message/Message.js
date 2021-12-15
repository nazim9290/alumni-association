import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ShareIcon from "@mui/icons-material/Share";

import Container from "@mui/material/Container";

const massage = {
  backgroundColor: "#EAEAEA",
  padding: "20px 0",
};

const Message = () => {
  return (
    <div style={massage}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="সভাপতির বার্তা" subheader="" />
              <CardMedia
                component="img"
                height="300"
                image="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.18169-9/18698243_1913959855512075_2932314981251938879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFbnyli6PclbSwN_iHJH9mjWRWm7Xc8EklZFabtdzwSSWe4pQuFSb5g8Px3D-LbgLNjEZ9Wkm6xqctDGb6C3Gl9&_nc_ohc=VhhpRkc5PrYAX_4dkmY&_nc_ht=scontent.fkix2-1.fna&oh=00_AT9r9JyKUPCCx1BjjUF6c4rFDpi_KD6vS9Y87J5-OxStpw&oe=61DEC579"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="pre" color="text.secondary">
                  নিজমেহার মডেল পাইলট উচ্চ বিদ্যালয়”অ্যালামনাই অ্যাসোসিয়েশন”
                  কমিটির সভাপতি” হিসেবে দায়িত্ব পালনের সুযোগ পাওয়া সত্যিই আমার
                  জন্য গর্ব ও সম্মানের। প্রতিষ্ঠার পরবর্তী অত্র বিদ্যালয় থেকে
                  পড়াশোনা করা অনেক ছাত্র-ছাত্রী দেশের বিভিন্ন পর্যায়ে ও প্রবাসে
                  সফল ও কৃতিত্বের সহিত কাজ করছেন, তাদের সকলকে একসেতু বন্ধনে আনার
                  লক্ষে অ্যালামনাই অ্যাসোসিয়েশান কাজ করবে। পাশাপাশি এর গুণগতমান
                  ধরে রেখে আমাদেরকে ভবিষ্যৎ উদ্দেশ্য স্মরণ রেখে কাজ করতে হবে।
                </Typography>
              </CardContent>
              <CardContent>
                <Typography pre>
                  বিদ্যালয়-এর শিক্ষার পরিবেশ উন্নয়নে সহযোগিতা করা, শিক্ষার
                  উন্নয়নের জন্য বিভিন্ন কর্মসূচি গ্রহণ করার জন্য সকলকে এক সাথে
                  কাজ করতে হবে। সময়ের পরিবর্তনের সাথে সাথে বৈশ্বিক
                  কর্মব্যস্ততায় আমরা জড়িয়ে পড়ি কিন্তু আমরা আমাদের নিকটবর্তী
                  সহপাঠী এবং বন্ধুদের এবং স্নেহের লোকজনের সাথে যোগাযোগ হারিয়ে
                  ফেলেছি। অ্যালামনাই অ্যাসোসিয়েশন আপনাকে সেই বন্ধুদের সাথে এবং
                  তাদের সাথে সম্পর্কিত মানুষদের সাথে যোগাযোগের সহায়তা করতে পারে
                  এবং বিভিন্ন অনুষ্ঠানে অংশগ্রহণের মাধ্যমে আপনার অভিজ্ঞতা, মেধা
                  এবং ক্যারিয়ারকে অনুসরণের জায়গা তৈরি করতে পারে। আমি বিশ্বাস
                  করি আমরা সকল প্রাক্তন ছাত্র-ছাত্রীরা যদি আন্তরিকতার সাথে কাজ
                  করি তবে আমরা একটি শক্তিশালী সংগঠন হিসেবে আত্মপ্রকাশ করতে
                  পারবো। সকলের সহযোগিতা একান্ত কাম্য।
                </Typography>

                <Typography variant="h6" sx={{ mt: 3 }}>
                  ডা: মোহাম্মদ মেহেদী হাসান মজুমদার,১৯৯৩
                </Typography>
                <Typography variant="pragraph">
                  সভাপতি নিজমেহার মডেল পাইলট উচ্চ বিদ্যালয়” অ্যালামনাই
                  অ্যাসোসিয়েশন
                </Typography>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="সাধারন সম্পাদকের বার্তা" subheader="" />
              <CardMedia
                component="img"
                height="300"
                image="https://scontent.fkix2-1.fna.fbcdn.net/v/t1.18169-9/18698243_1913959855512075_2932314981251938879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFbnyli6PclbSwN_iHJH9mjWRWm7Xc8EklZFabtdzwSSWe4pQuFSb5g8Px3D-LbgLNjEZ9Wkm6xqctDGb6C3Gl9&_nc_ohc=VhhpRkc5PrYAX_4dkmY&_nc_ht=scontent.fkix2-1.fna&oh=00_AT9r9JyKUPCCx1BjjUF6c4rFDpi_KD6vS9Y87J5-OxStpw&oe=61DEC579"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="pre" color="text.secondary">
                  চাঁদপুর জেলার শাহরাস্তি থানার ঐতিহ্যবাহী স্কুল “ নিজমেহার মডেল
                  পাইলট উচ্চ বিদ্যালয়” অ্যালামনাই অ্যাসোসিয়েশন কমিটির” সাধারন
                  সম্পাদক” হিসেবে মনোনীত ও দায়িত্ব পালনের সুযোগ পাওয়া সত্যিই
                  আমার জন্য সম্মানের। একই সাথে সম্পূর্ণ নতুন একটি সংগঠনের
                  দায়িত্ব নিয়ে সংগঠনটিকে সুন্দরভাবে পরিচালিত করা আমার জন্য
                  চ্যালেঞ্জেরও।আমি বিশ্বাস করি এই অ্যালামনাই অ্যাসোসিয়েশান সঠিক
                  গুণগতমান ধরে রেখে সামনের দিকে এগিয়ে যাবে। আর গুণগতমান ধরে
                  রাখতে আমাদেরকে সংগঠনটি সৃষ্টির পেছনে কারণ এবং ভবিষ্যৎ
                  উদ্দেশ্যকে স্মরণ রেখে কাজ করতে হবে, তবেই এটি শক্তিশালী সংগঠন
                  হিসেবে আত্মপ্রকাশ করবে।
                </Typography>
              </CardContent>
              <CardContent>
                <Typography pre>
                  নিজ মেহার মডেল পাইলট উচ্চ বিদ্যালয় -এর ভাবমুর্তি উন্নত করে
                  অ্যালামনাইদের মধ্যে একতা, সৌহার্দ্য ও ভ্রাতৃত্ববোধ স্থাপন এবং
                  একে- অন্যকে যথাসম্ভব সাহায্য ও সহযোগিতা করা। বিদ্যালয়ের ছাত্র
                  ছাত্রীদের স্বার্থ রক্ষা করা । এই সংগঠন গড়ে তোলার মাধ্যমে এর
                  মূল কাজ শুরু হল। এ থেকে সুফল ভোগ করতে কমিটি থেকে শুরু করে
                  সংগঠনটির অন্যান্য সদস্যদের সবাইকে একযোগে নিঃস্বার্থ ভাবে কাজ
                  করতে হবে। দেশ এবং দেশের বাইরে অবস্থানরত প্রবাসী সহ এই স্কুলের
                  সকল প্রাক্তন ছাত্র-ছাত্রী যারা এই স্কুলে জীবনের কোন একটি
                  নির্দিষ্ট সময়ে শিক্ষা গ্রহণ করেছে তাদের সবাইকে একত্রিত করার
                  মাধ্যমে সামনের দিকে এগিয়ে যেতে চাই। আশা রাখি এই সংগঠন আমাদের
                  স্কুলের সকল প্রাক্তন শিক্ষার্থীদেরকে একই সুতোয় গাঁথবে এবং
                  সুখে দুখে সবাই পরস্পর পরস্পরের সহযোগিতায় এগিয়ে আসবে। আমি
                  বিশ্বাস রাখি আমাদের অ্যাসোসিয়েশনটি সুদূর ভবিষ্যতেও সকলকে নিয়ে
                  কাজ করে অনেক দূর এগিয়ে যাবে। এজন্য সবার দোয়া এবং সহযোগিতাই
                  একান্ত কাম্য।
                </Typography>

                <Typography variant="h6" sx={{ mt: 3 }}>
                  ইঞ্জিনিয়ার মোঃ মুজিবুর রহমান (রাজিব) ,২০০১
                </Typography>
                <Typography variant="pragraph">
                  সাধারন সম্পাদক নিজমেহার মডেল পাইলট উচ্চ বিদ্যালয়” অ্যালামনাই
                  অ্যাসোসিয়েশন
                </Typography>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Message;
