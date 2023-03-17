<template>
  <address>
    <div class="call">
      <div class="call-center">1555-0000</div>
      <div class="day-time">평일 10:00-18:00</div>
      <div class="day-time">(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</div>
      <div class="btn-group">
        <button class="btn--primary">APP STORE</button>
        <button class="btn--primary">PLAY STORE</button>
      </div>
    </div>
    <div class="info">
      <div>
        (주)suhanlee 컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는
        서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
      </div>

      <div>
        상호명: (주)suhanlee · 대표이사: LEE SU HAN · 개인정보책임관리자: 이수한 · 주소:인천광역시
        남동구 호구포로 899길, 8 두진아파트
      </div>
      <div>
        사업자등록번호: 111-11-11111 · 통신판매업신고증:제 2023-인천남동-00000 호 · 직업정보제공사업
        신고번호: 서울청 제 2023-11호
      </div>
      <div>고객센터: 1522-0000 · 이메일: aaabbb@ccccc.com</div>
    </div>
  </address>
  <div class="copyright">Copyright ©Suhan Mobile Inc. All Rights Reserved.</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
address {
  word-break: keep-all;
  display: flex;
  margin-top: 40px;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    word-break: break-all;
  }
}
.call {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .call-center {
    font-size: 2.125rem;
    font-weight: 700;
  }
  .day-time {
    font-size: 1.25rem;
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  .btn-group {
    display: flex;
    margin-top: 10px;
    gap: 15px;
  }
}
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.2rem;
}
.copyright {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-size: 1.125rem;
  margin-bottom: 20px;
}
</style>
