<template>
    <div class="contact-us">
      <div class="div">
        <div class="form">
          <div class="banner">
            <img class="img" src="@/assets/banner.png" />
            <div class="frame">
              <div class="text">
                <p class="do-you-have-any">Do You Have Any Questions Or Want Some Clarification?</p>
                <div class="text-wrapper">We Can help you</div>
              </div>
            </div>
          </div>
          <div class="form-2">
            <div class="div-2">
              <p class="p">Contact Us For Any Questions</p>
              <p class="text-wrapper-2">Eu id cras morbi consectetur viverra eleifend pellentesque dui.</p>
            </div>
            <div class="inputs">
              <div class="text-input">
                <div class="text-input-2">
                  <input class="input" placeholder="Full Name" type="text" id="input-1" />
                  <div class="input-2"></div>
                </div>
                <div class="text-input-2">
                  <label class="text-wrapper-3" for="input-1">Phone</label>
                  <div class="input-2"></div>
                </div>
              </div>
              <div class="text-input">
                <div class="text-input-2">
                  <input class="input" placeholder="Email" type="email" />
                  <div class="input-2"></div>
                </div>
                <div class="text-input-2">
                  <div class="text-wrapper-3">Subject</div>
                  <div class="input-2"></div>
                </div>
              </div>
              <div class="text-input-3">
                <input class="input" placeholder="Message" type="text" />
                <div class="input-3"></div>
              </div>
            </div>
            <div class="div-wrapper"><div class="text-wrapper-4">Send Message</div></div>
          </div>
        </div>
        <img class="image" src="@/assets/ubicacion.png" />
        <img class="image2" src="@/assets/banner2.png" />

        <div class="hero"><div class="text-wrapper-5">Contact Us</div></div>
        <div class="group">
          <div class="address">
            <img class="icon" src="@/assets/location.png" />
            <div class="text-wrapper-15">Address</div>
            <p class="avenida-paseo-del">
              Avenida Paseo Del Mayab 4000 Región 79, Solidaridad, 77710<br />playa De Carmen, Quintana Roo
            </p>
          </div>
          <div class="email">
            <img class="icon-2" src="@/assets/email.png" />
            <div class="text-wrapper-16">Email</div>
            <div class="text-wrapper-17">2302032@utrivieramaya.edu.mx</div>
            <div class="text-wrapper-17">TourCraft@icloud.com</div>
          </div>
          <div class="phone">
            <img class="icon-2" src="@/assets/phone.png" />
            <div class="text-wrapper-16">Phone</div>
            <div class="text-wrapper-17">(984) 707-4989</div>
            <div class="text-wrapper-17">(55) 2670-3634</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
.contact-us {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 10%;
    margin-top: -200px;
    margin-bottom: -400px;
  }
  
 .div {
    background-color: #ffffff;
    width: 1600px;
    height: 2868px;
    position: relative;
  }
  
.form {
    display: inline-flex;
    align-items: flex-start;
    gap: 48px;
    padding: 60px 120px;
    position: absolute;
    top: 949px;
    left: 80px;
  }
  
.banner {
    position: relative;
    width: 368px;
    height: 602px;
    background-color: #000000;
    border-radius: 20px;
    overflow: hidden;
    background-image: url(https://c.animaapp.com/28w77pOF/img/banner.png);
    background-size: cover;
    background-position: 50% 50%;
  }


.img {
    position: absolute;
    width: 245px;
    height: 223px;
    top: 81px;
    left: 46px;
  }
  
.frame {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    position: absolute;
    top: 354px;
    left: 49px;
  }
  
.text {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: relative;
    flex: 0 0 auto;
  }
  
.do-you-have-any {
    position: relative;
    width: 269px;
    height: 40px;
    margin-top: -1.00px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .text-wrapper {
    position: relative;
    width: fit-content;
    font-family: "Golos Text", Helvetica;
    font-weight: 600;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  
 .form-2 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    position: relative;
    flex: 0 0 auto;
  }
  
 .div-2 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    flex: 0 0 auto;
  }
  
.p {
    position: relative;
    width: fit-content;
    margin-top: -1.00px;
    font-family: "Golos Text", Helvetica;
    font-weight: 700;
    color: #000000;
    font-size: 40px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
.text-wrapper-2 {
    position: relative;
    width: 649px;
    height: 34px;
    opacity: 0.6;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  
.inputs {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    position: relative;
    flex: 0 0 auto;
  }
  
.text-input {
    display: inline-flex;
    align-items: flex-start;
    gap: 48px;
    position: relative;
    flex: 0 0 auto;
  }
  
.text-input-2 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    position: relative;
    flex: 0 0 auto;
  }
  
.input {
    position: relative;
    width: fit-content;
    margin-top: -1.00px;
    font-family: "Golos Text", Helvetica;
    font-weight: 500;
    color: #000000;
    font-size: 18px;
    letter-spacing: 0;
    line-height: normal;
    background: transparent;
    border: none;
    padding: 0;
  }
  
.input-2 {
    position: relative;
    width: 368px;
    height: 50px;
    border: 1px solid;
    border-color: #000000;
    opacity: 0.6;
  }
  
.text-wrapper-3 {
    position: relative;
    width: fit-content;
    margin-top: -1.00px;
    font-family: "Golos Text", Helvetica;
    font-weight: 500;
    color: #000000;
    font-size: 18px;
    letter-spacing: 0;
    line-height: normal;
  }
  
  .text-input-3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
  }
  
.input-3 {
    position: relative;
    align-self: stretch;
    width: 100%;
    height: 92px;
    border: 1px solid;
    border-color: #000000;
    opacity: 0.6;
  }
  
.div-wrapper {
    display: flex;
    width: 784px;
    height: 60px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0px 40px;
    position: relative;
    background-color: #000000;
    border-radius: 12px;
  }
  
.text-wrapper-4 {
    position: relative;
    width: fit-content;
    font-family: "Golos Text", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
.image {
    position: absolute;
    width: 1452px;
    height: 300px;
    top: 1770px;
    left: 74px;
  }
.image2 {
    position: absolute;
    width: 1452px;
    height: 150px;
    top: 2200px;
    left: 74px;
  }
  
.hero {
    display: flex;
    width: 1200px;
    height: 320px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    top: 272px;
    left: 200px;
    background-color: #00000033;
    border-radius: 20px;
    overflow: hidden;
    background-image: url(https://c.animaapp.com/28w77pOF/img/hero.png);
    background-size: cover;
    background-position: 50% 50%;
  }
  
.text-wrapper-5 {
    position: relative;
    width: fit-content;
    font-family: "Golos Text", Helvetica;
    font-weight: 700;
    color: #ffffff;
    font-size: 60px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
.group {
    position: absolute;
    width: 1132px;
    height: 163px;
    top: 687px;
    left: 262px;
  }
  
.address {
    position: absolute;
    width: 467px;
    height: 144px;
    top: 1px;
    left: 289px;
  }
  
.icon {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 214px;
  }
  
.text-wrapper-15 {
    position: absolute;
    height: 34px;
    top: 55px;
    left: 178px;
    font-family: "Golos Text", Helvetica;
    font-weight: 600;
    color: #000000;
    font-size: 28px;
    text-align: right;
    letter-spacing: 0;
    line-height: normal;
  }
  
 .avenida-paseo-del {
    position: absolute;
    height: 38px;
    top: 105px;
    left: 0;
    font-family: "Golos Text", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
  }
  
.email {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 0;
    left: 883px;
    transform: rotate(-0.16deg);
  }
  
.icon-2 {
    position: relative;
    width: 40.11px;
    height: 40.11px;
    margin-top: -0.06px;
    transform: rotate(0.16deg);
  }
  
 .text-wrapper-16 {
    position: relative;
    width: fit-content;
    font-family: "Golos Text", Helvetica;
    font-weight: 600;
    color: #000000;
    font-size: 28px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
  }
  
 .text-wrapper-17 {
    position: relative;
    width: fit-content;
    font-family: "Golos Text", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  
 .phone {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 3px;
    left: 0;
    transform: rotate(-0.16deg);
}

@media (max-width: 768px) {
  .contact-us {
    transform: scale(0.2);
    margin-top: -280%;
    margin-bottom: -250%;
  }
}
</style>