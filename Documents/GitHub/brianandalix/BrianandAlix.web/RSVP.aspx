<%@ Page Title="" Language="C#" MasterPageFile="~/masters/Site.Master" AutoEventWireup="true" CodeBehind="RSVP.aspx.cs" Inherits="BrianandAlix.web.RSVP" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<style type="text/css">
    body
    {
        background:url(../imgs/common/DSCN0794.JPG) no-repeat;
        -webkit-background-size:cover;
        -moz--background-size:cover;
        -ms-background-size:cover;
        background-size:cover;
    }
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="rsvpForm">
        <form>
            <h2>RSVP</h2>
            <article id="guest">
                <h3>Please fill out the form below. We look forward to sharing our Wedding day with you.</h3>
            
                <label>Guest</label>
                <p><input type="text" id="txtFirstName" placeholder="First Name" /> <input type="text" id="txtLastName" placeholder="Last Name" /></p>

                <label>Will you attend?</label>
                <ul>
                    <li><input type="radio" name="attend" value="yes" /> Yes</li>
                    <li><input type="radio" name="attend" value="no" /> No</li>
                </ul>
            </article>
            <article id="additionalGuests">
                <label>Additional Guests?</label>
                <ul>
                    <li><input type="radio" name="addGuests" value="yes" /> Yes</li>
                    <li><input type="radio" name="addGuests" value="no" /> No</li>
                </ul>
                <p>
                    <input type="phone" placeholder="Guest Count" maxlength="2" />
                </p>
            </article>
            <input type="submit" value="Submit" />
        </form>
    </section>
</asp:Content>
