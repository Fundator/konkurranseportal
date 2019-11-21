using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class Kamp
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Sted { get; set; }    
        public string Lag1 { get; set; }
        public string Lag2 { get; set; }
        public string Resultat{ get; set; }

        public Gren Gren { get; set; }
        public Konkurranse Konkurranse { get; set; }
    }
}
