import { useState, useEffect } from 'react';
import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import Login from '../login/login';
import SignUp from '../signup/Signup';
// import { login } from '../../features/userdata';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { location } from '../../features/userdata';
import { setlocation } from '../../features/location';

// All the imports are mentioned above
// Typewriter is used for the animation of the text in the home page
// Login and Signup are the components which are used for the login and signup page
// axios for routing
// useDispatch for dispatching the action to the redux store
// location is the action which is used for storing the location of the user in the userdata slice
// setlocation is the action which is used for setting the location of the user in the location slice


function Home() {
  const [log, setlog]  = useState<boolean>(false); // log is the state which is used for the login page
  const [sig, setsig] = useState<boolean>(false); // sig is the state which is used for the signup page
  const [render, setrender] = useState(true); // render is the state which is used for rendering the login and signup page

  // The below return is for the Home Page which is the main page of the application since I was learning about having many components i the single page so I have used the components in the home page itself
  // Four components associated with the home page are Header, Login, SignUp and Middle

  return (
    <>
      {(log || sig) && (
        <div
          className="back"
          onClick={() => {
            setlog(false);
            setsig(false);
          }}
        ></div>
      )}
      <Header log={log} setlog={setlog} setsig={setsig} render={render} />

      <Login
        log={log}
        setlog={setlog}
        sig={sig}
        setsig={setsig}
        render={setrender}
      />
      <SignUp sig={sig} setsig={setsig} log={log} setlog={setlog} />
      <Middle></Middle>
    </>
  );
}
// Since I was learning about props and states so I have used the props and states in the components
function Header({
  log,
  setlog,
  setsig,
  render,
}: {
  log: boolean;
  setlog: boolean;
  setsig: boolean;
  render: any;
}) {

  return (
    <>
      <div className="style-0">
        <div className="style-1">
          <div className="style-2">
            <div className="style-3">
              <svg width="200" className="style-4" viewBox="0 0 200 200">
                <path
                  d="M19.9253444,58.766315 C19.8876048,58.7384908 19.8458927,58.7037105 19.8021942,58.6654521 C19.094081,57.7879944 14.7152991,52.3026415 10.2535896,45.2670801 C8.91532497,43.0252402 8.046322,41.2767839 8.21317057,40.8246398 C8.64965835,39.6490651 16.4279798,39.0056292 18.8234486,40.0713975 C19.5519214,40.3948545 19.5335482,40.8231492 19.5335482,41.0725738 C19.5335482,42.1487762 19.4804148,45.0365363 19.4804148,45.0365363 C19.4809114,45.6332671 19.9660634,46.1172104 20.5634408,46.1162167 C21.1618115,46.1162167 21.6449771,45.630286 21.6429908,45.0320645 L21.6305765,37.8365137 L21.6285902,37.8365137 C21.6285902,37.2119586 20.9467953,37.055944 20.8186794,37.0315978 C19.5683083,37.0256354 17.0293299,37.0171888 14.3031434,37.0171888 C8.28765654,37.0171888 6.94343308,37.264129 5.92148558,36.5958501 C3.707266,35.1479951 0.0867513255,25.3896318 0.0023338937,19.8993102 C-0.117836803,12.1537335 4.47149205,5.44808831 10.9338947,2.12557426 C13.6337628,0.766160708 16.6832184,0 19.9039917,0 C30.132405,0 38.555775,7.72023676 39.6765405,17.6529986 C39.6775337,17.6614452 39.6775337,17.6708856 39.67952,17.6793322 C39.8851013,20.0806647 26.6504342,20.5909417 24.0325007,19.8923542 C23.6312696,19.785032 23.528479,19.3741274 23.528479,19.1972447 C23.5254995,17.371278 23.5130852,12.2327345 23.5130852,12.2327345 C23.5110989,11.6355068 23.025947,11.1510667 22.4285695,11.1525572 L22.4275764,11.1525572 C21.831192,11.153551 21.3470332,11.6389848 21.3470332,12.2372063 L21.3683859,21.7029181 C21.3867591,22.2991521 21.8873048,22.4601353 22.024359,22.4869659 C23.5130852,22.4874627 26.9945594,22.4839847 30.2371819,22.4839847 C34.6199364,22.4839847 36.460733,22.9917773 37.6857789,23.9243867 C38.5001588,24.5454638 38.8154827,25.7344538 38.5398847,27.2796936 C36.0823442,41.0258688 20.5103075,58.0562997 19.9253444,58.766315 Z M62.158293,26.6840558 C66.0871796,28.3679201 68.5213811,30.23612 68.5213811,34.3367194 C68.5213811,38.5257602 65.3482788,41.2316689 60.4386603,41.2316689 C56.4601164,41.2316689 53.2666546,39.4295516 51.6761309,36.2864046 L51.418906,35.7796057 L56.0966249,33.0692253 L56.4030105,33.5700618 C57.4562421,35.2916875 58.633617,36.0255522 60.3418285,36.0255522 C61.8141679,36.0255522 62.8033415,35.3731729 62.8033415,34.4013114 C62.8033415,33.3246122 62.0872831,32.9211605 59.8740566,31.9522802 L58.7493185,31.4698275 C55.7475339,30.1904087 52.9667244,28.4126376 52.9667244,24.1068343 C52.9667244,20.2372755 55.9327557,17.5348449 60.1799457,17.5348449 C63.3977396,17.5348449 65.6030208,18.7804771 67.1210449,21.4535929 L67.4026018,21.9499577 L62.8703789,24.8625609 L62.5580344,24.3035915 C61.8002638,22.9481529 61.0866882,22.6763695 60.1799457,22.6763695 C59.2319876,22.6763695 58.6212026,23.199068 58.6212026,24.0099463 C58.6212026,24.9415619 59.0710979,25.3504791 61.0320652,26.2001125 L62.158293,26.6840558 Z M95.2686968,27.476898 L98.5709081,18.2690574 L104.238794,18.2690574 L95.8387627,41.611619 L94.5799498,41.611619 L89.484613,30.6796684 C89.2477476,30.1788318 89.0034336,29.556761 88.7928866,28.9868606 C88.5773739,29.5577547 88.327101,30.1813161 88.089739,30.6821527 L82.7952763,41.611619 L81.5449052,41.611619 L73.0103029,18.2690574 L79.065019,18.2690574 L82.4034802,27.476898 C82.61651,28.0641885 82.8350022,28.7801662 83.0261829,29.4444702 C83.2531168,28.7588011 83.5257354,28.0184772 83.8107684,27.4217464 L88.1955091,18.0767719 L89.4086373,18.0767719 L93.8614085,27.4227401 C94.1454483,28.0189741 94.4190601,28.7597949 94.6450009,29.445464 C94.8371747,28.7801662 95.0571566,28.0641885 95.2686968,27.476898 Z M110.84853,40.9414023 L110.84853,17.7921198 L116.569052,17.7921198 L116.569052,40.9414023 L110.84853,40.9414023 Z M135.325265,33.163629 L135.325265,27.9903052 L145.94746,27.9903052 L145.94746,38.3652739 L145.727975,38.5461315 C144.512861,39.5438298 141.291094,41.2316689 136.926713,41.2316689 C129.564023,41.2316689 124.423995,36.3529841 124.423995,29.3676057 C124.423995,22.5114114 129.383767,17.5348449 136.217607,17.5348449 C139.975672,17.5348449 142.730163,18.594154 144.637004,20.7738862 L145.009434,21.1996966 L141.110342,25.059815 L140.686765,24.6235704 C139.59778,23.500663 138.469566,22.8050567 136.217607,22.8050567 C132.717263,22.8050567 130.272137,25.5035125 130.272137,29.3676057 C130.272137,33.3926822 132.883118,35.99425 136.926713,35.99425 C138.267957,35.99425 139.664321,35.7632093 140.614762,35.394041 L140.614762,33.163629 L135.325265,33.163629 Z M164.314658,33.163629 L164.314658,27.9903052 L174.936853,27.9903052 L174.936853,38.3652739 L174.717368,38.5461315 C173.501261,39.5438298 170.280487,41.2316689 165.917099,41.2316689 C158.554409,41.2316689 153.413388,36.3529841 153.413388,29.3676057 C153.413388,22.5114114 158.374153,17.5348449 165.206006,17.5348449 C168.966058,17.5348449 171.720549,18.594154 173.626397,20.7738862 L173.99982,21.1996966 L170.101721,25.059815 L169.677151,24.6235704 C168.587669,23.500663 167.458959,22.8050567 165.206006,22.8050567 C161.706656,22.8050567 159.26153,25.5035125 159.26153,29.3676057 C159.26153,33.3926822 161.873504,35.99425 165.917099,35.99425 C167.258343,35.99425 168.653714,35.7632093 169.604155,35.394041 L169.604155,33.163629 L164.314658,33.163629 Z M195.897503,17.7922192 L201.87674,17.7922192 L193.669876,33.1964218 L193.669876,40.9415017 L187.918566,40.9415017 L187.918566,33.5253443 L179.1759,17.7922192 L185.555871,17.7922192 L189.596487,25.1730995 C190.030988,25.9760279 190.484856,27.0373245 190.827988,27.8988826 C191.155726,27.0442805 191.589235,25.9924244 192.020757,25.1800555 L195.897503,17.7922192 Z"
                  className="style-5"
                ></path>
              </svg>
              <div className="style-6">
                <a
                  className="style-7"
                  onClick={() => {
                    setlog(true);
                  }}
                >
                  Login
                </a>
                <a
                  className="style-8"
                  onClick={() => {
                    setsig(true);
                  }}
                >
                  Sign up
                </a>
              </div>
            </div>
            <h1 className="style-9">
              <Typewriter
                options={{
                  strings: [
                    'Hungry?',
                    'Late Night at Work?',
                    'Unexpected Guests?',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h2 className="style-10">
              Order food from favourite restaurants near you.
            </h2>
            <div className="style-11">
              <div className="style-12">
                <div className="style-13">
                  <SearchBox render={render} />
                  {/* <SearchBox
                    onResult={handleSearchResult}
                    placeholder={'Enter yor delivery location'}
                  /> */}

                  <div className="style-15"></div>
                  <label className="style-16" htmlFor="location"></label>
                </div>
                <button className="style-17">
                  <span className="style-18"></span>
                  <span className="style-19">Locate Me</span>
                </button>
              </div>
              <a className="style-20">
                <span className="style-21">FIND FOOD</span>
              </a>
            </div>
            <h3 className="style-22">Popular cities in India</h3>
            <ul className="style-23">
              <li className="style-24">
                <a href="/city/ahmedabad" className="style-25">
                  Ahmedabad
                </a>
              </li>
              <li className="style-26">
                <a href="/city/bangalore" className="style-27">
                  Bangalore
                </a>
              </li>
              <li className="style-28">
                <a href="/city/chennai" className="style-29">
                  Chennai
                </a>
              </li>
              <li className="style-30">
                <a href="/city/delhi" className="style-31">
                  Delhi
                </a>
              </li>
              <li className="style-32">
                <a href="/city/gurgaon" className="style-33">
                  Gurgaon
                </a>
              </li>
              <li className="style-34">
                <a href="/city/hyderabad" className="style-35">
                  Hyderabad
                </a>
              </li>
              <li className="style-36">
                <a href="/city/kolkata" className="style-37">
                  Kolkata
                </a>
              </li>
              <li className="style-38">
                <a href="/city/mumbai" className="style-39">
                  Mumbai
                </a>
              </li>
              <li className="style-40">
                <a href="/city/pune" className="style-41">
                  Pune
                </a>
              </li>
              <li className="style-42">
                <a href="#city-links" className="style-43"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="style-44"></div>
      </div>
    </>
  );
}
function Middle() {
  return (
    <>
      <div className="_2tnu- snipcss-Gqqg6">
        <div className="_2RZDN">
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="105"
                height="199"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              />
            </div>
            <div className="_3fted">No Minimum Order</div>
            <div className="_12i5X">
              Order in for yourself or for the group, with no restrictions on
              order value
            </div>
          </div>
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="112"
                height="206"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              />
            </div>
            <div className="_3fted">Live Order Tracking</div>
            <div className="_12i5X">
              Know where your order is at all times, from the restaurant to your
              doorstep
            </div>
          </div>
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="124"
                height="188"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              />
            </div>
            <div className="_3fted">Lightning-Fast Delivery</div>
            <div className="_12i5X">
              Experience Swiggy's superfast delivery for food delivered fresh
              &amp; on time
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// With the help of Mapbox API I have created a search box which will help the user to search for the location and a feature called AutoComplete will help the user to get the location name as he types in the search box.
function SearchBox(props) {
  const [query, setquery] = useState('');
  const [results, setResults] = useState({});
  const [showDiv, setShowDiv] = useState(true);
  const [geo, setgeo] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        axios
          .get('https://api.mapbox.com/search/searchbox/v1/suggest', {
            params: {
              q: query,
              access_token:
                'pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ',
              session_token: 'b5f471ac-ee43-4c20-80fb-4206883a88fc',
              language: 'en',
            },
          })
          .then((response) => {
            setResults(response.data);
            console.log(results);
          });
      }
    }, 500);

    return () => {
      clearTimeout(delay);
    };
  }, [query]);

  const handleInputChnage = (e) => {
    const value = e.target.value;
    setShowDiv(true);
    setquery(value);
  };
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        className="style-14"
        value={query}
        onChange={handleInputChnage}
        name="location"
        autoComplete="off"
        // tabIndex={tabindex}
        placeholder="Enter your delivery location"
        // maxLength={maxlength}
      />
      {showDiv && results && results.suggestions ? (
        <div>
          {results.suggestions.map((sugges) => (
            <ul key={sugges.mapbox_id}>
              <li style={{ listStyleType: 'none' }}>
                <button
                  className="_3lmRa _2At8F snipcss-asEvf"
                  onClick={() => {
                    setquery(sugges.name);
                    setShowDiv(false);
                    axios
                      .get(
                        `https://api.mapbox.com/search/searchbox/v1/retrieve/${sugges.mapbox_id}`,
                        {
                          params: {
                            access_token:
                              'pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ',
                            session_token:
                              'b5f471ac-ee43-4c20-80fb-4206883a88fc',
                          },
                        },
                      )
                      .then((response) => {
                        setgeo(response.data.features[0].geometry.coordinates);
                        const locationarray: Array<number> =
                          response.data.features[0].geometry.coordinates;

                        if (props.render) {
                          dispatch(
                            location({
                              latitude: locationarray[1],
                              longitude: locationarray[0],
                            }),
                          );
                          dispatch(
                            setlocation({
                              latitude: locationarray[1],
                              longitude: locationarray[0],
                              name: sugges.name,
                              place_formatted: sugges.place_formatted,
                            }),
                          );

                          console.log(
                            response.data.features[0].geometry.coordinates,
                          );
                          console.log(sugges);
                        }
                      });
                  }}
                >
                  <span className="icon-location _1HNsg"></span>
                  <span className="_2W-T9">{`${sugges.name}, ${
                    sugges.full_address ?? sugges.place_formatted
                  }`}</span>
                </button>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Home;
