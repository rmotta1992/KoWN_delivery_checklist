<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Responsive Columns</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="static/css/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.3.5/signature_pad.min.js" integrity="sha512-kw/nRM/BMR2XGArXnOoxKOO5VBHLdITAW00aG8qK4zBzcLVZ4nzg7/oYCaoiwc8U9zrnsO9UHqpyljJ8+iqYiQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>

    <div>
        <iframe width="10000px" height= "8000px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=36ehJnNodEW8gKoXwBzDLqcKXV04PCJCu_8vqyyJvYBUQTFQVDFMRldQODFYVkQyRlVJOFU4NDkwQy4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </div>
    
    <br/> 
    <p>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>E-Signature</h1>
          <p>Sign in the canvas below and save your signature as an image!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
           <canvas id="sig-canvas" width="620" height="160">
            
           </canvas>
         </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="btn btn-primary" id="sig-submitBtn">Submit Signature</button>
          <button class="btn btn-default" id="sig-clearBtn">Clear Signature</button>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-12">
          <textarea id="sig-dataUrl" class="form-control" rows="5">Data URL for your signature will go here!</textarea>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-md-12">
          <img id="sig-image" src="" alt="Your signature will go here!"/>
        </div>
      </div>
    </p>
    </div>
  
    <section id= "disclaimer">
        By signing, customer acknowledges that he/she has been informed of the following:		
          <ul>
            <li> Customer's responsibility to maintain their Kia vehicle in accordance with the maintenance schedules as started in the Owner's Manuel & introduced to the Service Department.</li>		
            <li> Customer's responsibility to retain service records to document that all vehicle maintenance has been performed.	</li>	
            <li> All items in sections 1-7 above. If customer has limited time and is not able to review all items within section "2. ADAS Systems", "3. Audio System", "4. Vehicle Features", customer acknowledges and elects to review additonal items on their own, through the use of the provided Features & Functions Guide. Quick Start Guides and Owner's Manual</li>		
          </ul>
    </section>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 
  <script src="signature_pad.js"></script>
  <script src="static/js/app.js"></script>
</body>

</html>