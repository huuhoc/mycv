<script setup lang="ts">
import TopContent from "~/components/modules/mycv/TopContent.vue";
import ListSkills from "~/components/modules/mycv/ListSkills.vue";

const listCompany = [
  {
    name: "SYNODUS",
    logo: "/company/synodus.svg",
    website: "https://synodus.com",
    timeworked: "03/2012 - Hiện tại",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
    ],
  },
  {
    name: "Cty Công nghệ Think Việt Nam",
    logo: "/company/thinkpro.png",
    website: "https://thinkpro.vn",
    timeworked: "12/2019 - 03/2021",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
    ],
  },
  {
    name: "AMELA",
    logo: "/company/amela.png",
    website: "https://amela.vn",
    timeworked: "09/2019 - 11/2019",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
      {
        name: "Maintain các dự án: Quản lý văn bản, Hệ thống điểm danh, Báo cáo điện tử.",
        desc: "Thực hiện maintain các dự án cũ theo yêu cầu của khách hàng. Triển khai cập nhật giao diện, chức năng.",
      },
    ],
  },
  {
    name: "Vinovathemes",
    logo: "/company/vinovathemes.png",
    website: "https://vinovathemes.com",
    timeworked: "04/2017 - 07/2019",
    position: "Team leader",
    detailProject: [
      {
        name: "Xây dựng quy trình build theme Ecommerce Prestashop, Shopify.",
        desc: "Công việc: Xây dựng bộ khung styles cho team, hướng dẫn các thành viên phát triển theme Prestashop, Shopify",
      },
    ],
  },
  {
    name: "Bravebits",
    logo: "/company/bravebits.png",
    website: "https://bravebits.co",
    timeworked: "03/2016 - 04/2017",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Phát triển theme CMS Joomla, tham gia quá trình xây dựng 'SUN Framework'",
        desc: "Công việc: Thực hiện phát triển theme, kết hợp với team backend xây dựng SUN framework - bộ extentions giúp customize themes joomla nhanh hơn.",
      },
    ],
  },
  {
    name: "SNSTheme",
    logo: "/company/snsthemes.png",
    website: "http://snsthemes.com",
    timeworked: "07/2015 - 02/2016",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Phát triển theme, template Ecommerce Prestashop.",
        desc: "Công việc: chuyển đổi thiết kế theme từ PSD sang giao diện theme, template. Kết hợp với team backend phát triển modules, plugins",
      },
    ],
  },
  {
    name: "Brainos",
    logo: "/company/brainos.jpg",
    website: "http://brainos.com",
    timeworked: "04/2014 - 07/2015",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Phát triển template trên nền tảng Ecommerce Prestashop, Shopify.",
        desc: "Công việc: chuyển đổi thiết kế theme từ PSD sang giao diện theme, template. Kết hợp với team backend phát triển modules, plugins",
      },
    ],
  },
  {
    name: "Lion Software Solution",
    logo: "/company/lss.png",
    website: "http://vn.lionsoftwaresolutions.com",
    timeworked: "11/2012 - 04/2014",
    position: "Frontend developer",
    detailProject: [
      {
        name: "Phát triển website trên nền tảng CMS Drupal 7, Wordpress.(CSS, HTML5, Bootstrap 2, Jquery)",
        desc: "",
      },
    ],
  },
];
</script>

<template>
  <Html lang="vi">
    <Head>
      <Title>Trang chủ</Title>
    </Head>
  </Html>
  <TopContent />
  <div class="py-7 flex flex-col md:flex-row md:space-x-10">
    <div
      class="w-full md:w-1/3 space-y-8 order-last md:order-first mt-6 md:mt-0"
    >
      <CommonBlock titleBlock="Giới thiệu">
        <CommonCard class="space-y-3">
          <p>
            Trong những năm qua, tôi đã làm việc với tư cách là Frontend
            Developer, không ngừng hoàn thiện bản thân.
          </p>
          <p>
            Trọng tâm của tôi là tạo ra các ứng dụng mạnh mẽ mang lại hiệu suất
            vượt trội trên nhiều thiết bị khác nhau.
          </p>
          <p>
            Mục tiêu của tôi là phát triển trải nghiệm UI/UX đáp ứng và thân
            thiện với người dùng, đảm bảo rằng các ứng dụng đáp ứng các tiêu
            chuẩn cao nhất về chất lượng và sự hài lòng của người dùng.
          </p>
        </CommonCard>
      </CommonBlock>
      <CommonBlock titleBlock="Kỹ năng">
        <CommonCard class="space-y-3">
          <ListSkills />
        </CommonCard>
      </CommonBlock>
      <CommonBlock titleBlock="Ngôn ngữ">
        <CommonCard class="space-y-3">
          <p>
            Tiếng anh đọc hiểu đáp ứng yêu cầu công việc, tài liệu kỹ thuật.
          </p>
        </CommonCard>
      </CommonBlock>
    </div>
    <div class="w-full md:w-2/3">
      <CommonBlock titleBlock="Kinh nghiệm làm việc">
        <CommonCompany
          v-for="company in listCompany"
          :key="company.name"
          :company="company"
        />
      </CommonBlock>
    </div>
  </div>
  <div
    class="py-7 border-t border-white border-opacity-20 md:space-x-10 flex flex-col md:flex-row"
  >
    <div class="text-sm">Develop with Nuxt3 and Tailwind</div>
    <div
      class="text-sm flex-1 md:text-right order-first md:order-last mb-2 md:mb-0"
    >
      Cuối cùng, tôi muốn nói lời <strong>cảm ơn</strong> Bạn đã dành thời gian
      xem xét CV của tôi.
    </div>
  </div>
</template>
