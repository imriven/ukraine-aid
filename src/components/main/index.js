import React from "react";
import { Page, MainDiv, CarouselContainer, StoryDiv, FlagImg, HeaderText, StoryText, StoryHeaderDiv, ContentRow, HelpHeaderDiv, HelpDiv, ItemList, Items, Split, ItemCol, Bold, ListHead, ListHeadDiv, CenterAddress, Footer, FooterText, GitHub, Web } from "./style"



export default function Main() {
  return (
    <Page>
      <MainDiv>
        <CarouselContainer>
          <FlagImg />
        </CarouselContainer>
        <StoryDiv>
          <StoryHeaderDiv>
            <HeaderText>My Story</HeaderText>
          </StoryHeaderDiv>
          <StoryText>
            I am Ukrainian and my family is in Ukraine now. Our country is going
            through the hardest time now, communities from all over the world
            are sending humanitarian help to the Ukraine, including our
            Seattle's Ukrainian community, but everyone is welcome to join! We
            have already collected and sent a lot of donations, but we continue
            to collect further, as the war continues in Ukraine, thousands of
            people were left without homes, hundreds and hundreds of people
            died. People are hiding in basements, bomb shelters, without food,
            clothing and warmth. People suffer, children suffer!
          </StoryText>
        </StoryDiv>

        <ContentRow>
          <HelpHeaderDiv>
            <HeaderText>How You Can Help</HeaderText>
            <HelpDiv>
              <StoryText>
                We ship everything via Meest Express to Lviv. There, parcels are
                met and delivered to cities where the post office does not work.
                Also, for the first time, we sent 40 suitcases full of charity
                by plane, with our escort. Unfortunately, we pay for every pound
                of weight. And shipping costs a lot of money too. Therefore, we
                will gladly accept any help. You can help by sending financial
                donations using the donate button.
              </StoryText>
              <br />
              <br />
              <br />
              <ListHeadDiv>
                <ListHead style={{ marginBottom: "3%", textAlign: "left" }}>
                  &nbsp; Here is a brief list of high priority items:
                </ListHead>
              </ListHeadDiv>
              <Split>
                <ItemCol>
                  <ItemList>
                    <Items>Foam Camping Pad</Items>
                    <Items>Sleeping Bags</Items>
                    <Items>Flashlights</Items>
                    <Items>Warm Blankets</Items>
                    <Items>10+ Sized Shoes</Items>
                    <Items>Large Warm Socks</Items>
                    <Items>L, XL, XXL Size Warm Clothes</Items>
                    <Items>Fleece</Items>
                    <Items>Knee Pads</Items>
                    <Items>Tactical Mittens</Items>
                    <Items>First Aid Kits</Items>

                    <Items>
                      <Bold>* Walkie-Talkies</Bold>
                    </Items>
                  </ItemList>
                </ItemCol>

                <ItemCol>
                  <ItemList>
                    <Items>Blood Pressure Monitors</Items>
                    <Items>Tactical Trousers</Items>
                    <Items>Non-Perishable Food</Items>
                    <Items>Baby Formula</Items>
                    <Items>Stew</Items>
                    <Items>Soup</Items>
                    <Items>Meat Soup</Items>
                    <Items>Chocolate</Items>
                    <Items>Snacks</Items>
                    <Items>Nuts</Items>
                    <Items>Protein Bars</Items>
                    <Items>Nutritious Snacks</Items>
                  </ItemList>
                </ItemCol>
              </Split>
              <br />
              <br />
              If you have these items on hand or have purchased these items
              please bring or send your donation to:
              <CenterAddress>
                Leasing Office
                <br/>
                Attn: Ukraine Aid
                <br />
                Everett at 11000
                <br />
                16th Ave SE <br />
                Everett, WA 98208
              </CenterAddress>
              If you would like to purchase and send these items you can do so
              though this <br />
              <br />
              <a href="https://www.amazon.com/hz/wishlist/ls/1EL6ICYQTPIRX?ref_=wl_share">
                Amazon WishList.
                <br />
                <br />
              </a>
              <StoryText>
                Please send your purchased Amazon items to the Leasing Office in
                Everett. Thank you very much for your help and please share this
                website with friends, family and on social media. Your help
                makes a difference! Thank you!
                <br />
              </StoryText>
            </HelpDiv>
          </HelpHeaderDiv>
        </ContentRow>
        <Footer>
          <FooterText>Developed by: Christina Harris</FooterText>
          <a
            href="https://github.com/imriven"
            style={{ padding: "0 2%", color: "white", fontSize: "1.5rem" }}
          >
            <GitHub />
          </a>
          <a
            href="https://www.christinaharris.dev/"
            style={{ color: "white", fontSize: "1.5rem" }}
          >
            <Web />
          </a>
        </Footer>
      </MainDiv>
    </Page>
  );
}


