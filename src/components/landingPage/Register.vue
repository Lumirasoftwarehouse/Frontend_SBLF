<template>
  <div class="register" id="register">
    <div class="container">
      <h2 class="text-center fw-bold mt-3 mb-4">REGISTER</h2>
      <div class="row">
        <div class="col-sm-6">
          <img src="/img/register.png" alt="register" width="90%"/>
        </div>
        <div class="col-sm-6">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div class="mb-3">
            <label for="company" class="form-label">Company Name</label>
            <input
              type="text"
              class="form-control"
              id="company"
              placeholder="Enter your company name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
