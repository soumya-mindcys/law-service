// // Navigation.jsx
// import React, { useState } from "react";
// import { Phone, Menu, X, Scale, ChevronDown, ChevronUp } from "lucide-react";
// import "../App.css";

// const Navigation = ({
//   isMenuOpen,
//   setIsMenuOpen,
//   isSticky,
//   scrollToSection,
// }) => {
//   const [servicesOpen, setServicesOpen] = useState(false); // For desktop dropdown
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isSticky ? "bg-white shadow-lg" : "bg-white shadow-md"
//       }`}
//       style={{
//         borderBottom: "1.5px solid #f3f4f6",
//         background: "rgba(255,255,255,0.98)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <div
//             className="flex items-center space-x-2 cursor-pointer"
//             onClick={() => scrollToSection("home")}
//           >
//             <span
//               className="flex items-center justify-center rounded-full bg-orange-500"
//               style={{ width: 36, height: 36 }}
//             >
//               <Scale className="h-6 w-6 text-white" />
//             </span>
//             <span
//               className="text-2xl font-bold text-black tracking-tight"
//               style={{ letterSpacing: "-1px" }}
//             >
//               DKP <span style={{ color: "var(--accent-orange)" }}>&</span>{" "}
//               Associates
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div
//             className="hidden md:flex items-center space-x-8"
//             style={{ marginLeft: "auto" }}
//           >
//             <button
//               onClick={() => scrollToSection("home")}
//               className="nav-link font-semibold text-lg relative"
//               style={{ background: "none", border: "none", boxShadow: "none" }}
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="nav-link font-semibold text-lg relative"
//               style={{ background: "none", border: "none", boxShadow: "none" }}
//             >
//               About
//             </button>

//             {/* Our Services Dropdown - Desktop */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button
//                 className="nav-link font-semibold text-lg relative flex items-center gap-1"
//                 style={{
//                   background: "none",
//                   border: "none",
//                   boxShadow: "none",
//                 }}
//                 type="button"
//               >
//                 Our Services
//                 <ChevronDown
//                   className={`h-4 w-4 transition-transform ${
//                     servicesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {servicesOpen && (
//                 <div
//                   className="absolute left-0 mt-3 w-80 bg-white border border-orange-200 shadow-2xl rounded-2xl z-50 py-3 px-2 animate-fadeInDown"
//                   style={{
//                     boxShadow: "0 12px 32px rgba(255,107,53,0.18)",
//                     borderTop: "4px solid #FF6B35",
//                     transition: "all 0.2s",
//                     background:
//                       "linear-gradient(135deg, #fff 80%, #ffe5d0 100%)",
//                   }}
//                 >
//                   {[
//                     { id: "litigation", name: "Litigation", icon: "⚖️" },
//                     { id: "ipr", name: "IPR", icon: "🔒" },
//                     { id: "registration", name: "Registration", icon: "📝" },
//                     {
//                       id: "compliance-services",
//                       name: "Compliance Services",
//                       icon: "✅",
//                     },
//                     { id: "consulting", name: "Consulting", icon: "💡" },
//                     {
//                       id: "contracts-drafting",
//                       name: "Contracts & Agreements Drafting",
//                       icon: "📄",
//                     },
//                   ].map((service) => (
//                     <button
//                       key={service.id}
//                       onClick={() => scrollToSection(service.id)}
//                       className="flex items-center gap-3 w-full text-left px-5 py-3 hover:bg-orange-100 hover:text-orange-700 font-semibold text-gray-700 transition rounded-xl mb-1 last:mb-0 group"
//                       style={{
//                         fontSize: "1.08rem",
//                         letterSpacing: "0.01em",
//                         border: "none",
//                         background: "none",
//                         position: "relative",
//                         overflow: "hidden",
//                       }}
//                     >
//                       <span
//                         className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-50 group-hover:bg-orange-500 group-hover:text-white text-orange-500 shadow"
//                         style={{ fontSize: "1.15rem", transition: "all 0.2s" }}
//                       >
//                         {service.icon}
//                       </span>
//                       <span className="flex-1">{service.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() => scrollToSection("success-story")}
//               className="nav-link font-semibold text-lg relative"
//               style={{ background: "none", border: "none", boxShadow: "none" }}
//             >
//               Success Story
//             </button>
//             <button
//               onClick={() => scrollToSection("articles-blogs")}
//               className="nav-link font-semibold text-lg relative"
//               style={{ background: "none", border: "none", boxShadow: "none" }}
//             >
//               Articles & Blogs
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="nav-link font-semibold text-lg relative"
//               style={{ background: "none", border: "none", boxShadow: "none" }}
//             >
//               Contact
//             </button>
//           </div>

//           {/* Call Button & Hamburger */}
//           <div className="flex items-center space-x-4">
//             <a
//               href="tel:+91-9876543210"
//               className="btn-primary hidden sm:flex shadow-md items-center"
//               style={{
//                 fontWeight: 700,
//                 fontSize: "1rem",
//                 boxShadow: "0 2px 8px rgba(255,107,53,0.10)",
//               }}
//             >
//               <Phone className="h-4 w-4 mr-2" />
//               Call Now
//             </a>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden text-black border border-orange-500 rounded-lg p-2 bg-white shadow-sm"
//               style={{ boxShadow: "0 1px 4px rgba(255,107,53,0.10)" }}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6 text-orange-500" />
//               ) : (
//                 <Menu className="h-6 w-6 text-orange-500" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div
//             className="md:hidden bg-orange-500 absolute top-16 left-0 right-0 shadow-lg rounded-b-lg animate-fadeInDown"
//             style={{ zIndex: 49 }}
//           >
//             <div className="px-4 py-2 space-y-2">
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="mobile-nav-link font-semibold text-lg"
//               >
//                 Home
//               </button>
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="mobile-nav-link font-semibold text-lg"
//               >
//                 About
//               </button>

//               {/* Our Services Expandable - Mobile */}
//               <div>
//                 <button
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   className="mobile-nav-link font-semibold text-lg flex justify-between items-center w-full"
//                 >
//                   <span>Our Services</span>
//                   {mobileServicesOpen ? (
//                     <ChevronUp className="h-5 w-5" />
//                   ) : (
//                     <ChevronDown className="h-5 w-5" />
//                   )}
//                 </button>

//                 {mobileServicesOpen && (
//                   <div className="mt-1 space-y-1 bg-orange-400 rounded-lg p-2">
//                     {[
//                       { id: "litigation", name: "Litigation" },
//                       { id: "ipr", name: "IPR" },
//                       { id: "registration", name: "Registration" },
//                       {
//                         id: "compliance-services",
//                         name: "Compliance Services",
//                       },
//                       { id: "consulting", name: "Consulting" },
//                       {
//                         id: "contracts-drafting",
//                         name: "Contracts & Agreements Drafting",
//                       },
//                     ].map((service) => (
//                       <button
//                         key={service.id}
//                         onClick={() => scrollToSection(service.id)}
//                         className="block w-full text-left px-3 py-2 rounded-md hover:bg-orange-300 transition-colors duration-200 text-white font-medium"
//                       >
//                         {service.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={() => scrollToSection("success-story")}
//                 className="mobile-nav-link font-semibold text-lg"
//               >
//                 Success Story
//               </button>
//               <button
//                 onClick={() => scrollToSection("articles-blogs")}
//                 className="mobile-nav-link font-semibold text-lg"
//               >
//                 Articles & Blogs
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="mobile-nav-link font-semibold text-lg"
//               >
//                 Contact
//               </button>
//               <a
//                 href="tel:+91-9876543210"
//                 className="mobile-nav-link flex items-center font-semibold text-lg"
//               >
//                 <Phone className="h-4 w-4 mr-2" />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { Phone, Menu, X, Scale, ChevronDown, ChevronUp } from "lucide-react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from 'react-router-dom';

// Animations
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Components
const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  border-bottom: 1.5px solid #f3f4f6;
  background: rgba(255, 255, 255, 0.98);
  ${({ isSticky }) =>
    isSticky
      ? css`
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        `
      : css`
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        `}
`;

const NavInnerContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

// Logo Section
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const LogoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #ff6b35;
  width: 36px;
  height: 36px;
`;

const ScaleIcon = styled(Scale)`
  height: 1.5rem;
  width: 1.5rem;
  color: white;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  letter-spacing: -1px;
`;

const AccentOrange = styled.span`
  color: #ff6b35;
`;

// Desktop Menu
const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  margin-left: auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.button`
  font-weight: 600;
  font-size: 1.125rem;
  position: relative;
  background: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  color: #1a1a1a;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b35;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #ff6b35;
    }
  }
`;

// Services Dropdown
const ServicesDropdownContainer = styled.div`
  position: relative;
`;

const ServicesDropdownButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const DropdownIcon = styled(ChevronDown)`
  height: 1rem;
  width: 1rem;
  transition: transform 0.2s;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const ServicesDropdownMenu = styled.div`
  position: absolute;
  left: 0;
  margin-top: 0.75rem;
  width: 20rem;
  background: white;
  border: 1px solid #fed7aa;
  border-top: 4px solid #ff6b35;
  box-shadow: 0 12px 32px rgba(255, 107, 53, 0.18);
  border-radius: 1rem;
  padding: 0.75rem 0.5rem;
  animation: ${fadeInDown} 0.3s;
  background: linear-gradient(135deg, #fff 80%, #ffe5d0 100%);
  z-index: 50;
`;

const ServiceItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  color: #374151;
  transition: all 0.2s;
  border-radius: 0.75rem;
  border: none;
  background: none;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #ffedd5;
    color: #c2410c;
  }
`;

const ServiceIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background-color: #fff7ed;
  color: #ff6b35;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.15rem;
  transition: all 0.2s;

  ${ServiceItem}:hover & {
    background-color: #ff6b35;
    color: white;
  }
`;

const ServiceName = styled.span`
  flex: 1;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
`;

// Nav Actions
const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CallButton = styled.a`
  display: none;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff6b35;
  color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.1);
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background-color: #ea580c;
  }

  @media (min-width: 640px) {
    display: flex;
  }
`;

const PhoneIcon = styled(Phone)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
`;

const MobileMenuButton = styled.button`
  display: block;
  color: black;
  border: 1px solid #ff6b35;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background: white;
  box-shadow: 0 1px 4px rgba(255, 107, 53, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(Menu)`
  height: 1.5rem;
  width: 1.5rem;
  color: #ff6b35;
`;

const CloseIcon = styled(X)`
  height: 1.5rem;
  width: 1.5rem;
  color: #ff6b35;
`;

// Mobile Menu
const MobileMenuContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: #ff6b35;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 0.5rem 0.5rem;
  animation: ${fadeInDown} 0.3s;
  z-index: 49;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileNavLink = styled.button`
  font-weight: 600;
  font-size: 1.125rem;
  color: white;
  padding: 0.5rem 0;
  text-align: left;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a2b;
  }
`;

const MobileServicesButton = styled(MobileNavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileDropdownIcon = styled(ChevronDown)`
  height: 1.25rem;
  width: 1.25rem;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const MobileServicesDropdown = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: #ea580c;
  border-radius: 0.375rem;
  padding: 0.5rem;
`;

const MobileServiceItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: background-color 0.2s;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c2410c;
  }
`;

const MobileCallButton = styled(MobileNavLink)`
  display: flex;
  align-items: center;
`;

const MobilePhoneIcon = styled(Phone)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
`;

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  isSticky,
  scrollToSection,
}) => {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Handle Articles & Blogs navigation
  const handleArticlesClick = () => {
    navigate('/articles-blogs');
    setIsMenuOpen(false);
  };

  return (
    <NavigationContainer isSticky={isSticky}>
      <NavInnerContainer>
        <NavContent>
          {/* Logo Section */}
          <LogoContainer onClick={() => scrollToSection("home")}>
            <LogoIcon>
              <ScaleIcon />
            </LogoIcon>
            <LogoText>
              DKP <AccentOrange>&</AccentOrange> Associates
            </LogoText>
          </LogoContainer>

          {/* Desktop Menu */}
          <DesktopMenu>
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>

            {/* Our Services Dropdown - Desktop */}
            <ServicesDropdownContainer
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <ServicesDropdownButton type="button">
                Our Services
                <DropdownIcon $isOpen={servicesOpen} />
              </ServicesDropdownButton>

              {servicesOpen && (
                <ServicesDropdownMenu>
                  {[
                    { id: "litigation", name: "Litigation" },
                    { id: "ipr", name: "IPR"},
                    { id: "registration", name: "Registration"},
                    {
                      id: "compliance-services",
                      name: "Compliance Services" 
                    },
                    { id: "consulting", name: "Consulting" },
                    {
                      id: "contracts-drafting",
                      name: "Contracts & Agreements Drafting"
                    },
                  ].map((service) => (
                    <ServiceItem
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                    >
                      <ServiceName>{service.name}</ServiceName>
                    </ServiceItem>
                  ))}
                </ServicesDropdownMenu>
              )}
            </ServicesDropdownContainer>

            <NavLink onClick={() => scrollToSection("success-story")}>
              Success Story
            </NavLink>

            {/* Fixed Articles & Blogs Link */}
            <NavLink onClick={handleArticlesClick}>
              Articles & Blogs
            </NavLink>
            
            <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
          </DesktopMenu>

          {/* Call Button & Hamburger */}
          {/* <NavActions>
            <CallButton href="tel:+91-9876543210">
              <PhoneIcon />
              Call Now
            </CallButton>
            <MobileMenuButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </MobileMenuButton>
          </NavActions> */}
        </NavContent>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenuContainer>
            <MobileMenuContent>
              <MobileNavLink onClick={() => scrollToSection("home")}>
                Home
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("about")}>
                About
              </MobileNavLink>

              {/* Our Services Expandable - Mobile */}
              <div>
                <MobileServicesButton
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Our Services</span>
                  <MobileDropdownIcon $isOpen={mobileServicesOpen} />
                </MobileServicesButton>

                {mobileServicesOpen && (
                  <MobileServicesDropdown>
                    {[
                      { id: "litigation", name: "Litigation" },
                      { id: "ipr", name: "IPR" },
                      { id: "registration", name: "Registration" },
                      {
                        id: "compliance-services",
                        name: "Compliance Services",
                      },
                      { id: "consulting", name: "Consulting" },
                      {
                        id: "contracts-drafting",
                        name: "Contracts & Agreements Drafting",
                      },
                    ].map((service) => (
                      <MobileServiceItem
                        key={service.id}
                        onClick={() => scrollToSection(service.id)}
                      >
                        {service.name}
                      </MobileServiceItem>
                    ))}
                  </MobileServicesDropdown>
                )}
              </div>

              <MobileNavLink onClick={() => scrollToSection("success-story")}>
                Success Story
              </MobileNavLink>
              
              {/* Fixed Mobile Articles & Blogs Link */}
              <MobileNavLink onClick={handleArticlesClick}>
                Articles & Blogs
              </MobileNavLink>
              
              <MobileNavLink onClick={() => scrollToSection("contact")}>
                Contact
              </MobileNavLink>
              <MobileCallButton href="tel:+91-9876543210">
                <MobilePhoneIcon />
                Call Now
              </MobileCallButton>
            </MobileMenuContent>
          </MobileMenuContainer>
        )}
      </NavInnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;