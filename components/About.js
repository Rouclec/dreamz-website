import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4 align-items-end mb-4">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img class="img-fluid rounded" src="img/about.png" />
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                About Us
              </p>
              <h1 class="display-5 mb-4">
                We Help Our Clients To Grow Their Business
              </h1>
              <p class="mb-4 text-justify">
                We are a travel and logistics company providing affordable,
                exceptional quality and time saving solutions across the globe
                in the area of travels (Air Ticket booking, VISA assistance,
                hotel reservations and passport making) Logistics (sending/
                receiving parcels) and Business (the purchase of quality goods
                at cheaper prices and have them delivered at your door step at
                your convenience).
              </p>

              {router.asPath == "/" ? (
                <Link legacyBehavior href="/about">
                  <a class="fw-semi-bold">
                    Read More <i class="fa fa-arrow-right ms-1"></i>
                  </a>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>

          {router.asPath == "/about" ? (
            <>
              <div class="row g-4 align-items-end mb-4">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h1 class="display-5 mb-4">More</h1>
                  <p class="mb-4 text-justify">
                    We have carried out a survey and found out that among the
                    people who travel from one country to another some really
                    love to have their Travels planed, assist with their VISA,
                    air tickets bookings and paperwork finalized by an
                    experience agent to reduce their fear of failure.
                    <br /> Others find it difficult to order good and have them
                    delivered on time and most at times the quality of the goods
                    is not actually what they desired and actually having this
                    goods delivered to them at the comfort of their homes.
                  </p>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <img class="img-fluid rounded" src="img/about2.png" />
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h1 class="display-5 mb-4">More</h1>
                  <p class="mb-4 text-justify">
                    Still in this survey we have discovered that people
                    generally want to order items or buy from the supermarkets,
                    fashion shops, restaurants and more but due to the fact that
                    they might not have the time to go get them by themselves
                    due to a tight schedule, they often feel frustrated and
                    desire they could place the orders and have them delivered
                    at the comfort of their homes without having to go to the
                    markets.
                  </p>
                </div>
              </div>
              <div
                class="border rounded p-4 wow fadeInUp mb-5"
                data-wow-delay="0.1s"
              >
                <div class="row g-4">
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="h-100">
                      <div class="d-flex">
                        {/* <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                          <i class="fa fa-times text-white"></i>
                        </div> */}
                        <img
                          class="img-fluid rounded"
                          src="img/vision.svg"
                          width={180}
                        />
                        <div class="ps-3">
                          <h4>Our vission</h4>
                          <span class="text-justify">
                            {/* Dare to live the life you always wanted? Get the best out
                        of your travel experience with us! */}
                            At Dreamz we take the complexity out of travels. You
                            can catch that VISA, Park that passport, book that
                            ticket and make your reservations with Dreamz. While
                            others just sell trips, we create memories and make
                            impact.
                          </span>
                        </div>
                        <div class="border-end d-none d-lg-block"></div>
                      </div>
                      <div class="border-bottom mt-4 d-block d-lg-none"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                    <div class="h-100">
                      <div class="d-flex">
                        {/* <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                          <i class="fa fa-users text-white"></i>
                        </div> */}
                        <img
                          class="img-fluid rounded"
                          src="img/mission.svg"
                          width={180}
                        />
                        <div class="ps-3">
                          <h4>Our mission</h4>
                          <span class="text-justify">
                            {/* Buy local and international products and get them
                        delivered to your doorstep */}
                            We help our clients move their product around the
                            world and across borders on time, on budget and in
                            compliace with ever-changing health, safety and
                            security measures, bringing you the satisfaction you
                            deserve.
                          </span>
                        </div>
                      </div>
                      <div class="border-bottom mt-4 d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="row g-4">
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-times text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Travel</h4>
                      <span class="text-justify">
                        {/* Dare to live the life you always wanted? Get the best out
                        of your travel experience with us! */}
                        At Dreamz we take the complexity out of travels. You can
                        catch that VISA, Park that passport, book that ticket
                        and make your reservations with Dreamz. While others
                        just sell trips, we create memories and make impact.
                      </span>
                    </div>
                    <div class="border-end d-none d-lg-block"></div>
                  </div>
                  <div class="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-users text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Logistics</h4>
                      <span class="text-justify">
                        {/* Buy local and international products and get them
                        delivered to your doorstep */}
                        We help our clients move their product around the world
                        and across borders on time, on budget and in compliace
                        with ever-changing health, safety and security measures,
                        bringing you the satisfaction you deserve.
                      </span>
                    </div>
                    <div class="border-end d-none d-lg-block"></div>
                  </div>
                  <div class="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-phone text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Business</h4>
                      <span class="text-justify">
                        {/* Dare to live the life you always wanted Get the best out
                        of your travel experience with us */}
                        We are also here to help you move your purchases from
                        Dubai very easily. Shop from the Dubai market and have
                        it delivered to you at the comfort of your home both
                        quality and standard maintained.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
